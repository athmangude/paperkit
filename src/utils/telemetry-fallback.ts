/**
 * Fallback telemetry service for development and when external dependencies are not available
 * 
 * IMPORTANT: This file and all telemetry code must NEVER be imported
 * into any files within src/components/ directory to maintain component
 * library integrity and prevent telemetry leakage to library consumers.
 */

import type { TelemetryEvent } from './telemetry';
import { TelemetryEventType } from './telemetry';

class FallbackTelemetryService {
  private events: TelemetryEvent[] = [];
  private isInitialized = false;

  public async initialize(): Promise<void> {
    this.isInitialized = true;
    console.log('Fallback telemetry service initialized (development mode)');
  }

  public track(event: TelemetryEvent): void {
    if (!this.isInitialized) {
      return;
    }

    // Store events in memory for development
    this.events.push(event);
    
    // Log to console in development
    if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
      console.log('Telemetry Event:', {
        type: event.type,
        page: event.page,
        element: event.element,
        properties: event.properties,
        timestamp: new Date(event.timestamp || Date.now()).toISOString(),
      });
    }
  }

  public trackPageView(page: string, properties?: Record<string, any>): void {
    this.track({
      type: TelemetryEventType.PAGE_VIEW,
      page,
      properties,
      timestamp: Date.now(),
    });
  }

  public trackButtonClick(page: string, buttonText: string, properties?: Record<string, any>): void {
    this.track({
      type: TelemetryEventType.BUTTON_CLICK,
      page,
      element: buttonText,
      properties,
      timestamp: Date.now(),
    });
  }

  public trackFormSubmit(page: string, formName: string, properties?: Record<string, any>): void {
    this.track({
      type: TelemetryEventType.FORM_SUBMIT,
      page,
      element: formName,
      properties,
      timestamp: Date.now(),
    });
  }

  public trackCodeCopy(page: string, codeType: string, properties?: Record<string, any>): void {
    this.track({
      type: TelemetryEventType.CODE_COPY,
      page,
      element: codeType,
      properties,
      timestamp: Date.now(),
    });
  }

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

  public trackScrollDepth(page: string, depth: number): void {
    this.track({
      type: TelemetryEventType.SCROLL_DEPTH,
      page,
      properties: { depth },
      timestamp: Date.now(),
    });
  }

  // Development helper methods
  public getEvents(): TelemetryEvent[] {
    return [...this.events];
  }

  public clearEvents(): void {
    this.events = [];
  }

  public getEventCount(): number {
    return this.events.length;
  }
}

export const fallbackTelemetryService = new FallbackTelemetryService();
