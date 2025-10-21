/**
 * Telemetry hooks for Protokit website
 * 
 * IMPORTANT: This file and all telemetry code must NEVER be imported
 * into any files within src/components/ directory to maintain component
 * library integrity and prevent telemetry leakage to library consumers.
 */

import { useEffect, useCallback, useRef } from 'react';
import { telemetryService, TelemetryEventType } from '../utils/telemetry';

// Global tracking to prevent duplicate page views
const trackedPages = new Set<string>();

/**
 * Hook for tracking page views and scroll depth
 */
export const usePageTracking = (pageName: string) => {
  const scrollDepthRef = useRef<number>(0);
  const scrollMilestones = [25, 50, 75, 100];
  const trackedMilestones = useRef<Set<number>>(new Set());
  const hasTrackedPageView = useRef<boolean>(false);

  useEffect(() => {
    // Only track page view once per page load globally
    if (!trackedPages.has(pageName)) {
      console.log(`Tracking page view for: ${pageName}`);
      telemetryService.trackPageView(pageName);
      trackedPages.add(pageName);
      hasTrackedPageView.current = true;
    } else {
      console.log(`Page view already tracked for: ${pageName}`);
    }

    // Track scroll depth
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / documentHeight) * 100);

      // Track milestone achievements
      scrollMilestones.forEach(milestone => {
        if (scrollPercent >= milestone && !trackedMilestones.current.has(milestone)) {
          trackedMilestones.current.add(milestone);
          telemetryService.trackScrollDepth(pageName, milestone);
        }
      });

      scrollDepthRef.current = scrollPercent;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Reset tracked pages when component unmounts (route change)
      trackedPages.clear();
    };
  }, [pageName]);

  return {
    trackScrollDepth: (depth: number) => telemetryService.trackScrollDepth(pageName, depth),
  };
};

/**
 * Hook for tracking user interactions
 */
export const useTelemetry = (pageName: string) => {
  const lastClickTime = useRef<number>(0);
  const clickDebounceMs = 500; // Prevent duplicate clicks within 500ms

  const trackEvent = useCallback((
    type: string,
    element?: string,
    properties?: Record<string, any>
  ) => {
    telemetryService.track({
      type,
      page: pageName,
      element,
      properties,
      timestamp: Date.now(),
    });
  }, [pageName]);

  const trackButtonClick = useCallback((buttonText: string, properties?: Record<string, any>) => {
    const now = Date.now();
    if (now - lastClickTime.current < clickDebounceMs) {
      console.log(`Debouncing button click: ${buttonText}`);
      return;
    }
    lastClickTime.current = now;
    console.log(`Tracking button click: ${buttonText}`);
    telemetryService.trackButtonClick(pageName, buttonText, properties);
  }, [pageName]);

  const trackFormSubmit = useCallback((formName: string, properties?: Record<string, any>) => {
    telemetryService.trackFormSubmit(pageName, formName, properties);
  }, [pageName]);

  const trackCodeCopy = useCallback((codeType: string, properties?: Record<string, any>) => {
    telemetryService.trackCodeCopy(pageName, codeType, properties);
  }, [pageName]);

  const trackComponentInteraction = useCallback((
    componentName: string,
    action: string,
    properties?: Record<string, any>
  ) => {
    telemetryService.trackComponentInteraction(pageName, componentName, action, properties);
  }, [pageName]);

  const trackNavigation = useCallback((destination: string, properties?: Record<string, any>) => {
    trackEvent(TelemetryEventType.NAVIGATION, destination, properties);
  }, [trackEvent]);

  const trackModalOpen = useCallback((modalName: string, properties?: Record<string, any>) => {
    trackEvent(TelemetryEventType.MODAL_OPEN, modalName, properties);
  }, [trackEvent]);

  const trackModalClose = useCallback((modalName: string, properties?: Record<string, any>) => {
    trackEvent(TelemetryEventType.MODAL_CLOSE, modalName, properties);
  }, [trackEvent]);

  const trackTabSwitch = useCallback((tabName: string, properties?: Record<string, any>) => {
    trackEvent(TelemetryEventType.TAB_SWITCH, tabName, properties);
  }, [trackEvent]);

  const trackAccordionToggle = useCallback((accordionName: string, isOpen: boolean, properties?: Record<string, any>) => {
    trackEvent(TelemetryEventType.ACCORDION_TOGGLE, accordionName, { isOpen, ...properties });
  }, [trackEvent]);

  return {
    trackEvent,
    trackButtonClick,
    trackFormSubmit,
    trackCodeCopy,
    trackComponentInteraction,
    trackNavigation,
    trackModalOpen,
    trackModalClose,
    trackTabSwitch,
    trackAccordionToggle,
  };
};

/**
 * Hook for tracking form interactions
 */
export const useFormTelemetry = (pageName: string, formName: string) => {
  const { trackFormSubmit, trackComponentInteraction } = useTelemetry(pageName);

  const trackFormFieldInteraction = useCallback((fieldName: string, action: string, properties?: Record<string, any>) => {
    trackComponentInteraction(`${formName}_${fieldName}`, action, properties);
  }, [trackComponentInteraction, formName]);

  const trackFormSubmission = useCallback((properties?: Record<string, any>) => {
    trackFormSubmit(formName, properties);
  }, [trackFormSubmit, formName]);

  return {
    trackFormFieldInteraction,
    trackFormSubmission,
  };
};

/**
 * Hook for tracking component demo interactions
 */
export const useComponentDemoTelemetry = (pageName: string) => {
  const { trackComponentInteraction, trackCodeCopy } = useTelemetry(pageName);

  const trackDemoInteraction = useCallback((
    componentName: string,
    action: string,
    properties?: Record<string, any>
  ) => {
    trackComponentInteraction(componentName, action, properties);
  }, [trackComponentInteraction]);

  const trackCodeCopyAction = useCallback((componentName: string, codeType: string, properties?: Record<string, any>) => {
    trackCodeCopy(`${componentName}_${codeType}`, properties);
  }, [trackCodeCopy]);

  return {
    trackDemoInteraction,
    trackCodeCopyAction,
  };
};
