'use client';

import { useEffect, useState } from 'react';
import { getFeatureFlagClient } from '@/libs/feature-flags';

export interface UseFeatureFlagResult {
  enabled: boolean;
  loading: boolean;
}

/**
 * Hook para consultar una feature flag desde un Client Component.
 * Hace una sola request al montar y cancela si el componente se desmonta antes.
 */
export function useFeatureFlag(
  flagName: string,
  userId: string = 'anonymous',
  defaultValue: boolean = false,
): UseFeatureFlagResult {
  const [enabled, setEnabled] = useState<boolean>(defaultValue);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const controller = new AbortController();
    let active = true;

    getFeatureFlagClient()
      .isEnabled(flagName, { userId, defaultValue, signal: controller.signal })
      .then((value) => {
        if (active) {
          setEnabled(value);
        }
      })
      .finally(() => {
        if (active) {
          setLoading(false);
        }
      });

    return () => {
      active = false;
      controller.abort();
    };
  }, [flagName, userId, defaultValue]);

  return { enabled, loading };
}
