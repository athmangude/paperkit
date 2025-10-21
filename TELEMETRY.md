# Telemetry Integration for Protokit Website

This document describes the telemetry integration implemented for the Protokit design system website, ensuring comprehensive user behavior tracking while maintaining component library integrity.

## Overview

The telemetry system tracks user interactions across all four main pages of the Protokit website:
- **Landing Page** (`App.tsx`) - Component demonstrations and navigation
- **About Page** (`About.tsx`) - Brand engagement and content consumption
- **Showcase Page** (`Showcase.tsx`) - Real-world application examples
- **Documentation Page** (`Documentation.tsx`) - Developer-focused interactions

## Architecture

### Core Components

1. **TelemetryService** (`src/utils/telemetry.ts`)
   - Centralized telemetry management
   - Multi-provider support (Google Analytics, Amplitude, Hotjar)
   - Event tracking and data collection

2. **Telemetry Hooks** (`src/hooks/useTelemetry.ts`)
   - React hooks for easy telemetry integration
   - Page-level tracking (`usePageTracking`)
   - Component interaction tracking (`useTelemetry`)
   - Form-specific tracking (`useFormTelemetry`)
   - Demo interaction tracking (`useComponentDemoTelemetry`)

3. **Telemetry Provider** (`src/components/telemetry/TelemetryProvider.tsx`)
   - React context for telemetry state management
   - Initialization and configuration

4. **Telemetry Wrappers** (`src/components/telemetry/TelemetryWrapper.tsx`)
   - Telemetry-aware wrapper components
   - Automatic event tracking for common interactions

## Implementation Constraints

### Component Library Integrity

**CRITICAL**: All telemetry code is isolated from the core component library (`src/components/`) to prevent:
- Telemetry leakage to library consumers
- Privacy violations in developer environments
- Analytics pollution from non-production usage

### File Structure

```
src/
├── components/           # Core component library (NO telemetry)
│   ├── button/
│   ├── card/
│   └── ...
├── components/telemetry/ # Website-only telemetry components
│   ├── TelemetryProvider.tsx
│   └── TelemetryWrapper.tsx
├── hooks/               # Website-only telemetry hooks
│   └── useTelemetry.ts
├── utils/              # Website-only telemetry utilities
│   └── telemetry.ts
├── config/             # Website-only telemetry configuration
│   └── telemetry.config.ts
└── pages/              # Page-level telemetry integration
    ├── App.tsx
    ├── About.tsx
    ├── Showcase.tsx
    └── Documentation.tsx
```

## Telemetry Events

### Page-Level Events
- **Page Views**: Automatic tracking on page load
- **Scroll Depth**: Milestone tracking (25%, 50%, 75%, 100%)
- **Navigation**: Inter-page navigation patterns

### Component Interaction Events
- **Button Clicks**: All button interactions with context
- **Form Submissions**: Form completion and field interactions
- **Code Copying**: Developer code snippet interactions
- **Modal Interactions**: Open/close events
- **Tab Switching**: Component demo navigation
- **Component Selection**: Documentation component switching

### User Journey Events
- **Feature Discovery**: Which components users explore first
- **Engagement Patterns**: Time spent on different sections
- **Conversion Funnels**: Path from landing to adoption

## Configuration

### Environment Variables

```bash
# Google Analytics 4
REACT_APP_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Amplitude Analytics
REACT_APP_AMPLITUDE_API_KEY=your_amplitude_api_key_here

# Hotjar Analytics
REACT_APP_HOTJAR_SITE_ID=your_hotjar_site_id_here
```

### Provider Configuration

The system supports multiple analytics providers:

1. **Google Analytics 4** - Page views and navigation tracking
2. **Amplitude** - Event tracking and user behavior analysis
3. **Hotjar** - Heatmaps and session recordings

## Privacy and Security

### Data Protection
- **IP Anonymization**: All IP addresses are anonymized
- **No PII Collection**: No personally identifiable information is tracked
- **Do Not Track Respect**: Honors browser DNT settings
- **Production Only**: Telemetry only active in production builds

### Consent Management
- Telemetry can be configured to require user consent
- Easy opt-out mechanisms available
- Transparent data collection practices

## Usage Examples

### Basic Page Tracking
```typescript
import { usePageTracking } from '../hooks/useTelemetry';

const MyPage = () => {
  usePageTracking('my-page');
  // Automatic page view and scroll tracking
};
```

### Component Interaction Tracking
```typescript
import { useTelemetry } from '../hooks/useTelemetry';

const MyComponent = () => {
  const { trackButtonClick, trackComponentInteraction } = useTelemetry('my-page');
  
  const handleClick = () => {
    trackButtonClick('My Button', { context: 'hero-section' });
  };
  
  const handleComponentInteraction = () => {
    trackComponentInteraction('slider', 'value_change', { value: 50 });
  };
};
```

### Form Tracking
```typescript
import { useFormTelemetry } from '../hooks/useTelemetry';

const MyForm = () => {
  const { trackFormSubmission, trackFormFieldInteraction } = useFormTelemetry('my-page', 'contact-form');
  
  const handleSubmit = () => {
    trackFormSubmission({ fields: 5, completion: true });
  };
  
  const handleFieldChange = (field: string, value: any) => {
    trackFormFieldInteraction(field, 'change', { value });
  };
};
```

## Validation

### Telemetry Isolation Check
```bash
# Verify no telemetry imports in component library
grep -r "telemetry" src/components/ --exclude-dir=telemetry
# Should return no results
```

### Provider Validation
```typescript
import { validateTelemetryConfig, getActiveProviders } from '../config/telemetry.config';

// Check configuration validity
const isValid = validateTelemetryConfig();

// Get active providers
const providers = getActiveProviders();
console.log('Active providers:', providers);
```

## Success Metrics

The telemetry integration is considered successful when:

1. ✅ **Isolation**: No telemetry code exists in `src/components/`
2. ✅ **Coverage**: All four pages have comprehensive tracking
3. ✅ **Events**: Key interactions are properly tracked
4. ✅ **Providers**: Analytics dashboards show expected data
5. ✅ **Performance**: No significant performance impact
6. ✅ **Privacy**: No PII or sensitive data collection
7. ✅ **Production**: Only active in production environments

## Troubleshooting

### Common Issues

1. **Telemetry Not Working**
   - Check environment variables are set
   - Verify production build
   - Check browser console for errors

2. **Missing Events**
   - Ensure hooks are properly imported
   - Check event tracking calls are made
   - Verify provider configuration

3. **Performance Issues**
   - Check for excessive event firing
   - Verify provider scripts are optimized
   - Monitor network requests

### Debug Mode

Enable debug logging by setting:
```typescript
// In telemetry.config.ts
debug: process.env.NODE_ENV === 'development'
```

This will log all telemetry events to the console for debugging purposes.

## Future Enhancements

- **A/B Testing**: Integration with experimentation platforms
- **Real-time Analytics**: Live user behavior monitoring
- **Advanced Segmentation**: User cohort analysis
- **Performance Monitoring**: Core Web Vitals tracking
- **Error Tracking**: JavaScript error monitoring
