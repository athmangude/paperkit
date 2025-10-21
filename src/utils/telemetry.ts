/**
 * Telemetry utilities for Protokit website
 * 
 * IMPORTANT: This file and all telemetry code must NEVER be imported
 * into any files within src/components/ directory to maintain component
 * library integrity and prevent telemetry leakage to library consumers.
 */

import { telemetryConfig } from '../config/telemetry.config';
import { fallbackTelemetryService } from './telemetry-fallback';
import { TelemetryLoader } from './telemetry-loader';
import * as amplitude from '@amplitude/analytics-browser';

// Telemetry configuration interface
export interface TelemetryConfig {
  enabled: boolean;
  environment: 'development' | 'production';
  providers: {
    googleAnalytics?: {
      measurementId: string;
      enabled: boolean;
    };
    amplitude?: {
      apiKey: string;
      enabled: boolean;
    };
    hotjar?: {
      siteId: string;
      enabled: boolean;
    };
  };
}

// Event types for consistent tracking
export const TelemetryEventType = {
  PAGE_VIEW: 'page_view',
  BUTTON_CLICK: 'button_click',
  FORM_SUBMIT: 'form_submit',
  CODE_COPY: 'code_copy',
  COMPONENT_INTERACTION: 'component_interaction',
  SCROLL_DEPTH: 'scroll_depth',
  NAVIGATION: 'navigation',
  MODAL_OPEN: 'modal_open',
  MODAL_CLOSE: 'modal_close',
  TAB_SWITCH: 'tab_switch',
  ACCORDION_TOGGLE: 'accordion_toggle',
  SEARCH: 'search',
  DOWNLOAD: 'download',
} as const;

// Event properties interface
export interface TelemetryEvent {
  type: string;
  page: string;
  element?: string;
  properties?: Record<string, any>;
  timestamp?: number;
}

class TelemetryService {
  private config: TelemetryConfig;
  private isInitialized = false;
  private loader: TelemetryLoader;

  constructor(config: TelemetryConfig = telemetryConfig) {
    this.config = config;
    this.loader = new TelemetryLoader({
      googleAnalytics: config.providers.googleAnalytics?.enabled ? {
        measurementId: config.providers.googleAnalytics.measurementId
      } : undefined,
      amplitude: config.providers.amplitude?.enabled ? {
        apiKey: config.providers.amplitude.apiKey
      } : undefined,
      hotjar: config.providers.hotjar?.enabled ? {
        siteId: config.providers.hotjar.siteId
      } : undefined,
    });
  }

  /**
   * Initialize telemetry providers
   */
  public async initialize(): Promise<void> {
    console.log('Initializing telemetry service...');
    console.log('Config:', this.config);
    
    if (!this.config.enabled) {
      console.log('Telemetry is disabled on localhost');
      return;
    }
    
    if (this.isInitialized) {
      console.log('Telemetry already initialized');
      return;
    }

    try {
      // Load all external providers dynamically
      console.log('Loading external providers...');
      await this.loader.loadAll();
      
      // Check if any providers were loaded successfully
      const loadedProviders = this.loader.getLoadedProviders();
      console.log('Loaded providers:', loadedProviders);
      
      if (loadedProviders.length === 0) {
        console.log('No external telemetry providers available, using fallback service');
        await fallbackTelemetryService.initialize();
      } else {
        console.log('Telemetry providers loaded successfully:', loadedProviders);
      }

      this.isInitialized = true;
      console.log('Telemetry initialization complete');
    } catch (error) {
      console.warn('Telemetry initialization failed, using fallback:', error);
      await fallbackTelemetryService.initialize();
      this.isInitialized = true;
    }
  }

  /**
   * Track a telemetry event
   */
  public track(event: TelemetryEvent): void {
    console.log('Tracking event:', event);
    
    if (!this.config.enabled) {
      console.log('Telemetry is disabled on localhost, not tracking event');
      return;
    }
    
    if (!this.isInitialized) {
      console.log('Telemetry not initialized yet, not tracking event');
      return;
    }

    try {
      // Send to Google Analytics
      if (this.config.providers.googleAnalytics?.measurementId) {
        console.log('Sending to Google Analytics');
        this.trackGoogleAnalytics(event);
      }

      // Send to Amplitude
      if (this.config.providers.amplitude?.apiKey) {
        console.log('Sending to Amplitude');
        this.trackAmplitude(event);
      }

      // If no external providers are configured, use fallback
      if (!this.config.providers.googleAnalytics?.measurementId && 
          !this.config.providers.amplitude?.apiKey && 
          !this.config.providers.hotjar?.siteId) {
        console.log('No external providers configured, using fallback');
        fallbackTelemetryService.track(event);
      }
    } catch (error) {
      console.warn('Telemetry tracking failed, using fallback:', error);
      fallbackTelemetryService.track(event);
    }
  }

  /**
   * Track page view
   */
  public trackPageView(page: string, properties?: Record<string, any>): void {
    this.track({
      type: 'PAGE_VIEW',
      page,
      properties,
      timestamp: Date.now(),
    });
  }

  /**
   * Track button click
   */
  public trackButtonClick(page: string, buttonText: string, properties?: Record<string, any>): void {
    this.track({
      type: TelemetryEventType.BUTTON_CLICK,
      page,
      element: buttonText,
      properties,
      timestamp: Date.now(),
    });
  }

  /**
   * Track form submission
   */
  public trackFormSubmit(page: string, formName: string, properties?: Record<string, any>): void {
    this.track({
      type: TelemetryEventType.FORM_SUBMIT,
      page,
      element: formName,
      properties,
      timestamp: Date.now(),
    });
  }

  /**
   * Track code copy action
   */
  public trackCodeCopy(page: string, codeType: string, properties?: Record<string, any>): void {
    this.track({
      type: TelemetryEventType.CODE_COPY,
      page,
      element: codeType,
      properties,
      timestamp: Date.now(),
    });
  }

  /**
   * Track component interaction
   */
  public trackComponentInteraction(
    page: string,
    componentName: string,
    action: string,
    properties?: Record<string, any>
  ): void {
    this.track({
      type: TelemetryEventType.COMPONENT_INTERACTION,
      page,
      element: `${componentName}_${action}`,
      properties,
      timestamp: Date.now(),
    });
  }

  /**
   * Track scroll depth
   */
  public trackScrollDepth(page: string, depth: number): void {
    this.track({
      type: TelemetryEventType.SCROLL_DEPTH,
      page,
      properties: { depth },
      timestamp: Date.now(),
    });
  }


  private trackGoogleAnalytics(event: TelemetryEvent): void {
    try {
      // Use global gtag function (loaded via script)
      if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
        (window as any).gtag('event', event.type, {
          event_category: event.page,
          event_label: event.element,
          custom_parameters: event.properties,
        });
      }
    } catch (error) {
      console.warn('Google Analytics tracking failed:', error);
    }
  }

  private trackAmplitude(event: TelemetryEvent): void {
    try {
      // Use Amplitude npm package
      amplitude.track(event.type, {
        page: event.page,
        element: event.element,
        ...event.properties,
      });
    } catch (error) {
      console.warn('Amplitude tracking failed:', error);
    }
  }
}

// Create singleton instance
export const telemetryService = new TelemetryService();
