/**
 * Telemetry utilities for Protokit website
 * 
 * IMPORTANT: This file and all telemetry code must NEVER be imported
 * into any files within src/components/ directory to maintain component
 * library integrity and prevent telemetry leakage to library consumers.
 */

import { telemetryConfig } from '../config/telemetry.config';

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
export enum TelemetryEventType {
  PAGE_VIEW = 'page_view',
  BUTTON_CLICK = 'button_click',
  FORM_SUBMIT = 'form_submit',
  CODE_COPY = 'code_copy',
  COMPONENT_INTERACTION = 'component_interaction',
  SCROLL_DEPTH = 'scroll_depth',
  NAVIGATION = 'navigation',
  MODAL_OPEN = 'modal_open',
  MODAL_CLOSE = 'modal_close',
  TAB_SWITCH = 'tab_switch',
  ACCORDION_TOGGLE = 'accordion_toggle',
  SEARCH = 'search',
  DOWNLOAD = 'download',
}

// Event properties interface
export interface TelemetryEvent {
  type: TelemetryEventType;
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
      // Initialize Google Analytics
      if (this.config.providers.googleAnalytics?.measurementId) {
        await this.initializeGoogleAnalytics();
      }

      // Initialize Amplitude
      if (this.config.providers.amplitude?.apiKey) {
        await this.initializeAmplitude();
      }

      // Initialize Hotjar
      if (this.config.providers.hotjar?.siteId) {
        this.initializeHotjar();
      }

      this.isInitialized = true;
    } catch (error) {
      console.warn('Telemetry initialization failed:', error);
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
    } catch (error) {
      console.warn('Telemetry tracking failed:', error);
    }
  }

  /**
   * Track page view
   */
  public trackPageView(page: string, properties?: Record<string, any>): void {
    this.track({
      type: TelemetryEventType.PAGE_VIEW,
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
    const { gtag } = await import('gtag');
    gtag('config', this.config.providers.googleAnalytics!.measurementId, {
      page_title: document.title,
      page_location: window.location.href,
    });
  }

  private async initializeAmplitude(): Promise<void> {
    const amplitude = await import('@amplitude/analytics-browser');
    amplitude.init(this.config.providers.amplitude!.apiKey);
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
    if (typeof gtag !== 'undefined') {
      gtag('event', event.type, {
        event_category: event.page,
        event_label: event.element,
        custom_parameters: event.properties,
      });
    }
  }

  private trackAmplitude(event: TelemetryEvent): void {
    if (typeof amplitude !== 'undefined') {
      amplitude.track(event.type, {
        page: event.page,
        element: event.element,
        ...event.properties,
      });
    }
  }
}

// Create singleton instance
export const telemetryService = new TelemetryService();

// Export types and utilities
export type { TelemetryConfig, TelemetryEvent };
