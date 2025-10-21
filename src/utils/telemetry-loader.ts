/**
 * Dynamic telemetry provider loader for React applications
 * 
 * IMPORTANT: This file and all telemetry code must NEVER be imported
 * into any files within src/components/ directory to maintain component
 * library integrity and prevent telemetry leakage to library consumers.
 */

import { hotjar } from 'react-hotjar';
import * as amplitude from '@amplitude/analytics-browser';

interface TelemetryLoaderConfig {
  googleAnalytics?: {
    measurementId: string;
  };
  amplitude?: {
    apiKey: string;
  };
  hotjar?: {
    siteId: string;
  };
}

class TelemetryLoader {
  private config: TelemetryLoaderConfig;
  private loadedProviders: Set<string> = new Set();

  constructor(config: TelemetryLoaderConfig) {
    this.config = config;
  }

  /**
   * Load Google Analytics dynamically
   */
  public async loadGoogleAnalytics(): Promise<boolean> {
    console.log('Attempting to load Google Analytics...');
    console.log('GA Measurement ID:', this.config.googleAnalytics?.measurementId);
    
    if (this.loadedProviders.has('googleAnalytics')) {
      console.log('Google Analytics already loaded');
      return false;
    }
    
    if (!this.config.googleAnalytics?.measurementId) {
      console.log('No Google Analytics measurement ID provided');
      return false;
    }

    try {
      console.log('Loading GA script...');
      // Load Google Analytics script dynamically
      await this.loadScript(`https://www.googletagmanager.com/gtag/js?id=${this.config.googleAnalytics.measurementId}`);
      
      // Initialize gtag
      if (typeof window !== 'undefined') {
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).gtag = function() {
          (window as any).dataLayer.push(arguments);
        };
        (window as any).gtag('js', new Date());
        (window as any).gtag('config', this.config.googleAnalytics.measurementId);
        console.log('GA gtag initialized');
      }

      this.loadedProviders.add('googleAnalytics');
      console.log('Google Analytics loaded successfully');
      return true;
    } catch (error) {
      console.warn('Failed to load Google Analytics:', error);
      return false;
    }
  }

  /**
   * Load Amplitude using @amplitude/analytics-browser npm package
   */
  public async loadAmplitude(): Promise<boolean> {
    console.log('Attempting to load Amplitude...');
    console.log('Amplitude API Key:', this.config.amplitude?.apiKey ? 'Present' : 'Missing');
    
    if (this.loadedProviders.has('amplitude')) {
      console.log('Amplitude already loaded');
      return false;
    }
    
    if (!this.config.amplitude?.apiKey) {
      console.log('No Amplitude API key provided');
      return false;
    }

    try {
      console.log('Initializing Amplitude...');
      // Initialize Amplitude using the npm package
      amplitude.init(this.config.amplitude.apiKey);
      console.log('Amplitude init called');

      this.loadedProviders.add('amplitude');
      console.log('Amplitude loaded successfully via @amplitude/analytics-browser package');
      return true;
    } catch (error) {
      console.warn('Failed to load Amplitude:', error);
      return false;
    }
  }

  /**
   * Load Hotjar using react-hotjar
   */
  public async loadHotjar(): Promise<boolean> {
    console.log('Attempting to load Hotjar...');
    console.log('Hotjar Site ID:', this.config.hotjar?.siteId);
    
    if (this.loadedProviders.has('hotjar')) {
      console.log('Hotjar already loaded');
      return false;
    }
    
    if (!this.config.hotjar?.siteId) {
      console.log('No Hotjar site ID provided');
      return false;
    }

    try {
      console.log('Initializing Hotjar...');
      // Initialize Hotjar using react-hotjar
      hotjar.initialize({
        id: parseInt(this.config.hotjar.siteId),
        sv: 6
      });
      console.log('Hotjar initialize called');

      this.loadedProviders.add('hotjar');
      console.log('Hotjar loaded successfully via react-hotjar');
      return true;
    } catch (error) {
      console.warn('Failed to load Hotjar:', error);
      return false;
    }
  }

  /**
   * Load all configured providers
   */
  public async loadAll(): Promise<void> {
    console.log('loadAll() called');
    console.log('Config in loader:', this.config);
    
    const promises = [];

    console.log('GA config:', this.config.googleAnalytics);
    console.log('Amplitude config:', this.config.amplitude);
    console.log('Hotjar config:', this.config.hotjar);

    if (this.config.googleAnalytics?.measurementId) {
      console.log('Adding GA to promises');
      promises.push(this.loadGoogleAnalytics());
    } else {
      console.log('GA not configured - no measurement ID');
    }

    if (this.config.amplitude?.apiKey) {
      console.log('Adding Amplitude to promises');
      promises.push(this.loadAmplitude());
    } else {
      console.log('Amplitude not configured - no API key');
    }

    if (this.config.hotjar?.siteId) {
      console.log('Adding Hotjar to promises');
      promises.push(this.loadHotjar());
    } else {
      console.log('Hotjar not configured - no site ID');
    }

    console.log('Promises to execute:', promises.length);
    await Promise.allSettled(promises);
  }


  /**
   * Check if a provider is loaded
   */
  public isLoaded(provider: string): boolean {
    return this.loadedProviders.has(provider);
  }

  /**
   * Get loaded providers
   */
  public getLoadedProviders(): string[] {
    return Array.from(this.loadedProviders);
  }

  /**
   * Load a script dynamically
   */
  private loadScript(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
      document.head.appendChild(script);
    });
  }
}

export { TelemetryLoader };
export type { TelemetryLoaderConfig };
