/**
 * Telemetry Provider for Protokit website
 * 
 * IMPORTANT: This file and all telemetry code must NEVER be imported
 * into any files within src/components/ directory to maintain component
 * library integrity and prevent telemetry leakage to library consumers.
 */

import React, { createContext, useContext, useEffect } from 'react';
import type { ReactNode } from 'react';
import { telemetryService } from '../utils/telemetry';
import { HotjarProvider } from './HotjarProvider';
import { telemetryConfig } from '../config/telemetry.config';

interface TelemetryContextType {
  isEnabled: boolean;
  trackPageView: (page: string, properties?: Record<string, any>) => void;
  trackButtonClick: (page: string, buttonText: string, properties?: Record<string, any>) => void;
  trackFormSubmit: (page: string, formName: string, properties?: Record<string, any>) => void;
  trackCodeCopy: (page: string, codeType: string, properties?: Record<string, any>) => void;
  trackComponentInteraction: (
    page: string,
    componentName: string,
    action: string,
    properties?: Record<string, any>
  ) => void;
}

const TelemetryContext = createContext<TelemetryContextType | null>(null);

interface TelemetryProviderProps {
  children: ReactNode;
}

export const TelemetryProvider: React.FC<TelemetryProviderProps> = ({ children }) => {
  const [isInitialized, setIsInitialized] = React.useState(false);

  useEffect(() => {
    // Initialize telemetry service asynchronously
    const initTelemetry = async () => {
      try {
        await telemetryService.initialize();
        console.log('Telemetry initialized successfully');
        setIsInitialized(true);
      } catch (error) {
        console.warn('Telemetry initialization failed:', error);
        setIsInitialized(true); // Still render children even if telemetry fails
      }
    };

    initTelemetry();
  }, []);

  const contextValue: TelemetryContextType = {
    isEnabled: isInitialized && typeof window !== 'undefined',
    trackPageView: telemetryService.trackPageView.bind(telemetryService),
    trackButtonClick: telemetryService.trackButtonClick.bind(telemetryService),
    trackFormSubmit: telemetryService.trackFormSubmit.bind(telemetryService),
    trackCodeCopy: telemetryService.trackCodeCopy.bind(telemetryService),
    trackComponentInteraction: telemetryService.trackComponentInteraction.bind(telemetryService),
  };

  return (
    <TelemetryContext.Provider value={contextValue}>
      <HotjarProvider 
        siteId={telemetryConfig.providers.hotjar?.siteId || ''}
        version={6}
      >
        {children}
      </HotjarProvider>
    </TelemetryContext.Provider>
  );
};

export const useTelemetryContext = (): TelemetryContextType => {
  const context = useContext(TelemetryContext);
  if (!context) {
    throw new Error('useTelemetryContext must be used within a TelemetryProvider');
  }
  return context;
};
