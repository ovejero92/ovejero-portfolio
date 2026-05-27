/**
 * Cliente liviano para el servicio de feature flags FlagFlow.
 * Solo consume el endpoint público GET /api/v1/public/flag/:appId/:flagName
 * que devuelve { enabled: boolean } y, opcionalmente, acepta un header X-User-Id
 * para que el server haga la evaluación de rollout consistente por usuario.
 */

const DEFAULT_BASE_URL = 'http://localhost:8080';
const DEFAULT_TIMEOUT_MS = 1500;

export interface IsEnabledOptions {
  /** Identificador del usuario para evaluar rollout consistente. Por defecto 'anonymous'. */
  userId?: string;
  /** Valor a devolver si el server no responde o falla. Por defecto false. */
  defaultValue?: boolean;
  /** AbortSignal externo (por ejemplo, el de un useEffect que se desmonta). */
  signal?: AbortSignal;
}

export interface FeatureFlagClient {
  isEnabled(flagName: string, options?: IsEnabledOptions): Promise<boolean>;
}

class FlagFlowClient implements FeatureFlagClient {
  constructor(
    private readonly baseUrl: string,
    private readonly appId: string,
    private readonly timeoutMs: number = DEFAULT_TIMEOUT_MS,
  ) {}

  async isEnabled(flagName: string, options: IsEnabledOptions = {}): Promise<boolean> {
    const { userId, defaultValue = false, signal } = options;

    // Si no hay app_id configurada no hay forma de consultar nada: caemos al default
    // sin pegarle al server (evita 400s y logs en consola durante desarrollo).
    if (!this.appId) {
      return defaultValue;
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeoutMs);
    const onExternalAbort = () => controller.abort();
    signal?.addEventListener('abort', onExternalAbort);

    try {
      const url = `${this.baseUrl}/api/v1/public/flag/${this.appId}/${encodeURIComponent(flagName)}`;
      const headers: Record<string, string> = {};
      if (userId) {
        headers['X-User-Id'] = userId;
      }

      const response = await fetch(url, {
        method: 'GET',
        headers,
        signal: controller.signal,
        // Las feature flags cambian server-side; nunca queremos respuestas cacheadas
        cache: 'no-store',
      });

      if (!response.ok) {
        return defaultValue;
      }

      const data = (await response.json()) as { enabled?: boolean };
      return data.enabled === true;
    } catch {
      // Cualquier error (red caída, timeout, server apagado, JSON inválido) → default.
      // La premisa es: si las flags fallan, la app no debe romperse.
      return defaultValue;
    } finally {
      clearTimeout(timeoutId);
      signal?.removeEventListener('abort', onExternalAbort);
    }
  }
}

let cachedClient: FeatureFlagClient | null = null;

/**
 * Devuelve una instancia singleton del cliente, configurada con variables de entorno:
 *   - NEXT_PUBLIC_FLAGFLOW_API_URL (default: http://localhost:8080)
 *   - NEXT_PUBLIC_FLAGFLOW_APP_ID  (obligatoria; si falta, isEnabled() devuelve defaultValue)
 */
export function getFeatureFlagClient(): FeatureFlagClient {
  if (cachedClient) {
    return cachedClient;
  }

  const baseUrl = (process.env.NEXT_PUBLIC_FLAGFLOW_API_URL ?? DEFAULT_BASE_URL).replace(/\/$/, '');
  const appId = process.env.NEXT_PUBLIC_FLAGFLOW_APP_ID ?? '';

  cachedClient = new FlagFlowClient(baseUrl, appId);
  return cachedClient;
}
