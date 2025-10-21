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
    
    if (this.loadedProviders.has('googleAnalytics')) {
      return false;
    }
    
    if (!this.config.googleAnalytics?.measurementId) {
      return false;
    }

    try {
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
      }

      this.loadedProviders.add('googleAnalytics');
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
    
    if (this.loadedProviders.has('amplitude')) {
      return false;
    }
    
    if (!this.config.amplitude?.apiKey) {
      return false;
    }

    try {
      // Initialize Amplitude using the npm package
      amplitude.init(this.config.amplitude.apiKey);

      this.loadedProviders.add('amplitude');
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
    
    if (this.loadedProviders.has('hotjar')) {
      return false;
    }
    
    if (!this.config.hotjar?.siteId) {
      return false;
    }

    try {
      // Initialize Hotjar using react-hotjar
      hotjar.initialize({
        id: parseInt(this.config.hotjar.siteId),
        sv: 6
      });

      this.loadedProviders.add('hotjar');
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
    
    const promises = [];


    if (this.config.googleAnalytics?.measurementId) {
      promises.push(this.loadGoogleAnalytics());
    } else {
    }

    if (this.config.amplitude?.apiKey) {
      promises.push(this.loadAmplitude());
    } else {
    }

    if (this.config.hotjar?.siteId) {
      promises.push(this.loadHotjar());
    } else {
    }

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
