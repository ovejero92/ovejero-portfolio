'use client';

import { useFeatureFlag } from '@/hooks/useFeatureFlag';

/**
 * Banner flotante controlado por la flag `mostrar-banner-experimental` de FlagFlow.
 * Se muestra únicamente si el server devuelve { enabled: true } para el visitante.
 */
export default function ExperimentalBanner() {
  const { enabled } = useFeatureFlag('mostrar-banner-experimental', 'visitante');

  if (!enabled) {
    return null;
  }

  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        right: '1.5rem',
        zIndex: 9999,
        padding: '0.75rem 1.25rem',
        borderRadius: '0.75rem',
        background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
        color: 'white',
        boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
        fontSize: '0.95rem',
        maxWidth: '20rem',
      }}
    >
      ✨ Nueva sección de proyectos interactivos próximamente
    </div>
  );
}
