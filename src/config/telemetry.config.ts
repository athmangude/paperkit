/**
 * Telemetry configuration for Protokit website
 * 
 * IMPORTANT: This file and all telemetry code must NEVER be imported
 * into any files within src/components/ directory to maintain component
 * library integrity and prevent telemetry leakage to library consumers.
 */

// Safe environment variable access
const getEnvVar = (key: string): string => {
  if (typeof window !== 'undefined' && (window as any).__ENV__) {
    return (window as any).__ENV__[key] || '';
  }
  return '';
};

const isProduction = (): boolean => {
  if (typeof window !== 'undefined') {
    return window.location.hostname !== 'localhost' && !window.location.hostname.includes('127.0.0.1');
  }
  return false;
};

export const telemetryConfig = {
  // Enable telemetry only in production
  enabled: isProduction(),
  
  // Environment
  environment: isProduction() ? 'production' as const : 'development' as const,
  
  // Provider configurations
  providers: {
    googleAnalytics: {
      measurementId: getEnvVar('VITE_GA_MEASUREMENT_ID'),
      enabled: !!getEnvVar('VITE_GA_MEASUREMENT_ID'),
    },
    amplitude: {
      apiKey: getEnvVar('VITE_AMPLITUDE_API_KEY'),
      enabled: !!getEnvVar('VITE_AMPLITUDE_API_KEY'),
    },
    hotjar: {
      siteId: getEnvVar('VITE_HOTJAR_SITE_ID'),
      enabled: !!getEnvVar('VITE_HOTJAR_SITE_ID'),
    },
  },
  
  // Event tracking settings
  tracking: {
    // Track scroll depth milestones
    scrollMilestones: [25, 50, 75, 100],
    
    // Track user interactions
    trackInteractions: true,
    
    // Track form submissions
    trackForms: true,
    
    // Track code copying
    trackCodeCopy: true,
    
    // Track component interactions
    trackComponents: true,
  },
  
  // Privacy settings
  privacy: {
    // Anonymize IP addresses
    anonymizeIP: true,
    
    // Respect Do Not Track
    respectDNT: true,
    
    // Cookie consent required
    requireConsent: false, // Set to true if you want to implement consent management
  },
};

// Validation function to check if telemetry is properly configured
export const validateTelemetryConfig = (): boolean => {
  if (!telemetryConfig.enabled) {
    return true; // Telemetry is disabled, which is valid
  }
  
  const { providers } = telemetryConfig;
  
  // At least one provider should be configured
  return (
    providers.googleAnalytics.enabled ||
    providers.amplitude.enabled ||
    providers.hotjar.enabled
  );
};

// Get active providers
export const getActiveProviders = () => {
  const { providers } = telemetryConfig;
  const activeProviders: string[] = [];
  
  if (providers.googleAnalytics.enabled) {
    activeProviders.push('Google Analytics');
  }
  
  if (providers.amplitude.enabled) {
    activeProviders.push('Amplitude');
  }
  
  if (providers.hotjar.enabled) {
    activeProviders.push('Hotjar');
  }
  
  return activeProviders;
};
