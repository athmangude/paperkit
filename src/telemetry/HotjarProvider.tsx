/**
 * Hotjar Provider Component
 * 
 * IMPORTANT: This file and all telemetry code must NEVER be imported
 * into any files within src/components/ directory to maintain component
 * library integrity and prevent telemetry leakage to library consumers.
 */

import React, { useEffect } from 'react';
import { hotjar } from 'react-hotjar';

interface HotjarProviderProps {
  siteId: string;
  version?: number;
  children: React.ReactNode;
}

/**
 * Hotjar Provider Component
 * 
 * This component initializes Hotjar when the app loads.
 * It should be placed high in the component tree, ideally
 * in the main App component or TelemetryProvider.
 */
export const HotjarProvider: React.FC<HotjarProviderProps> = ({
  siteId,
  version = 6,
  children,
}) => {
  useEffect(() => {
    if (siteId) {
      try {
        hotjar.initialize({
          id: parseInt(siteId),
          sv: version
        });
        console.log('Hotjar initialized with site ID:', siteId);
      } catch (error) {
        console.warn('Failed to initialize Hotjar:', error);
      }
    }
  }, [siteId, version]);

  return <>{children}</>;
};

export default HotjarProvider;
