/**
 * Telemetry utilities for Protokit website
 * 
 * IMPORTANT: This file and all telemetry code must NEVER be imported
 * into any files within src/components/ directory to maintain component
 * library integrity and prevent telemetry leakage to library consumers.
 */

import { telemetryConfig } from '../config/telemetry.config';
import { fallbackTelemetryService } from './telemetry-fallback';

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

  constructor(config: TelemetryConfig = telemetryConfig) {
    this.config = config;
  }

  /**
   * Initialize telemetry providers
   */
  public async initialize(): Promise<void> {
    if (!this.config.enabled || this.isInitialized) {
      return;
    }

    try {
      // Try to initialize external providers
      let hasExternalProviders = false;

      // Initialize Google Analytics
      if (this.config.providers.googleAnalytics?.measurementId) {
        try {
          await this.initializeGoogleAnalytics();
          hasExternalProviders = true;
        } catch (error) {
          console.warn('Google Analytics initialization failed:', error);
        }
      }

      // Initialize Amplitude
      if (this.config.providers.amplitude?.apiKey) {
        try {
          await this.initializeAmplitude();
          hasExternalProviders = true;
        } catch (error) {
          console.warn('Amplitude initialization failed:', error);
        }
      }

      // Initialize Hotjar
      if (this.config.providers.hotjar?.siteId) {
        try {
          this.initializeHotjar();
          hasExternalProviders = true;
        } catch (error) {
          console.warn('Hotjar initialization failed:', error);
        }
      }

      // If no external providers are available, use fallback
      if (!hasExternalProviders) {
        console.log('No external telemetry providers available, using fallback service');
        await fallbackTelemetryService.initialize();
      }

      this.isInitialized = true;
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
    if (!this.config.enabled || !this.isInitialized) {
      return;
    }

    try {
      // Send to Google Analytics
      if (this.config.providers.googleAnalytics?.measurementId) {
        this.trackGoogleAnalytics(event);
      }

      // Send to Amplitude
      if (this.config.providers.amplitude?.apiKey) {
        this.trackAmplitude(event);
      }

      // If no external providers are configured, use fallback
      if (!this.config.providers.googleAnalytics?.measurementId && 
          !this.config.providers.amplitude?.apiKey && 
          !this.config.providers.hotjar?.siteId) {
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

  private async initializeGoogleAnalytics(): Promise<void> {
    try {
      // Check if gtag is available globally (loaded via script tag)
      if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
        (window as any).gtag('config', this.config.providers.googleAnalytics!.measurementId, {
          page_title: document.title,
          page_location: window.location.href,
        });
      } else {
        console.warn('Google Analytics gtag not found - ensure GA script is loaded');
      }
    } catch (error) {
      console.warn('Google Analytics initialization failed:', error);
    }
  }

  private async initializeAmplitude(): Promise<void> {
    try {
      // Check if Amplitude is available globally (loaded via script tag)
      if (typeof window !== 'undefined' && typeof (window as any).amplitude !== 'undefined') {
        (window as any).amplitude.init(this.config.providers.amplitude!.apiKey);
      } else {
        console.warn('Amplitude not found - ensure Amplitude script is loaded');
      }
    } catch (error) {
      console.warn('Amplitude initialization failed:', error);
    }
  }

  private initializeHotjar(): void {
    const script = document.createElement('script');
    script.innerHTML = `
      (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:${this.config.providers.hotjar!.siteId},hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    `;
    document.head.appendChild(script);
  }

  private trackGoogleAnalytics(event: TelemetryEvent): void {
    try {
      // Check if gtag is available globally
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
      // Check if amplitude is available globally
      if (typeof window !== 'undefined' && typeof (window as any).amplitude !== 'undefined') {
        (window as any).amplitude.track(event.type, {
          page: event.page,
          element: event.element,
          ...event.properties,
        });
      }
    } catch (error) {
      console.warn('Amplitude tracking failed:', error);
    }
  }
}

// Create singleton instance
export const telemetryService = new TelemetryService();
