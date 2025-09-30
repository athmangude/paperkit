# Protokit Design System

A beautiful, hand-drawn design system built with React and TypeScript, featuring the Patrick Hand font for a unique, sketchy aesthetic.

## 🎨 Features

- **Hand-drawn Aesthetic**: All components feature irregular, sketchy styling that mimics hand-drawn elements
- **Patrick Hand Font**: Uses the Patrick Hand Google Font for authentic handwritten appearance
- **TypeScript Support**: Fully typed components with comprehensive TypeScript definitions
- **SSR Compatible**: Built to work with server-side rendering frameworks
- **Self-contained Styling**: Each component has its own CSS module for easy integration
- **Comprehensive Component Library**: 19+ components covering all common UI needs

## 📦 Components

### Typography & Links
- **Heading** (H1-H3) with wavy underlines
- **BodyText** with consistent styling
- **Link** with hand-drawn underlines

### Buttons & Actions
- **Button** with multiple variants (primary, secondary, outline)
- **IconButton** for icon-only actions
- Multiple sizes (small, medium, large)
- Interactive states (hover, active, disabled)

### Form Inputs
- **Input** with validation states
- **TextArea** for longer text input
- **Checkbox** with hand-drawn checkmarks
- **Radio** with sketchy selection dots
- **Toggle** switch component
- **Slider** with draggable thumb
- **DatePicker** with calendar interface

### Feedback & Alerts
- **Modal** with overlay and close functionality
- **Notification** toast messages
- **Tooltip** with positioning options
- **ProgressBar** with animated fills
- **Badge** for notifications and counts

### Layout & Navigation
- **Card** with elevation options
- **Divider** for content separation
- **Tabs** with tab switching
- **Accordion** for collapsible content
- **List** with customizable items
- **Pagination** for navigation
- **Table** with structured data display

### Data Display
- **Tag** for categorization
- **Table** with header, rows, and cells

## 🚀 Getting Started

### Installation

```bash
npm install protokit
```

Or using yarn:

```bash
yarn add protokit
```

### Dependencies

**Required:**
- React 18.0.0 or higher
- TypeScript 4.9.0 or higher

**Optional:**
- CSS Modules (for custom styling)
- React Router (for navigation)

### Basic Usage

```tsx
import { Button, Card, Heading, BodyText } from 'protokit';

function App() {
  return (
    <Card>
      <Heading level={1}>Hello Protokit!</Heading>
      <BodyText>Welcome to the hand-drawn design system.</BodyText>
      <Button>Click me</Button>
    </Card>
  );
}
```

### Project Integration

#### CSS Setup
Import the base styles in your main CSS file:

```css
@import 'protokit/dist/styles.css';
```

#### Font Setup
Add Patrick Hand font to your HTML:

```html
<link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap" rel="stylesheet">
```

## 🎯 Design Principles

### Hand-drawn Aesthetic
- Irregular, sketchy borders and shapes
- Inconsistent line weights
- Subtle imperfections for authenticity
- Wavy underlines and organic curves

### Interactive States
- Hover effects with boldening
- Active states with depression effects
- Disabled states with faded appearance
- Smooth transitions and animations

### Accessibility
- ARIA attributes for screen readers
- Keyboard navigation support
- High contrast ratios
- Focus indicators

## 📚 Documentation

### Showcase
Visit the showcase to see all components in action with interactive examples.

### Component Documentation
Each component includes:
- Visual examples
- Props documentation
- TypeScript definitions
- Usage patterns
- Interactive playground

## 🛠 Development

### Project Structure
```
src/
├── components/          # Individual component folders
│   ├── button/
│   ├── input/
│   ├── card/
│   └── ...
├── types/              # TypeScript definitions
├── pages/              # Documentation pages
└── styles/             # Global styles
```

### Component Structure
Each component follows this structure:
```
component-name/
├── ComponentName.tsx   # React component
├── ComponentName.css   # Component styles
└── index.ts           # Export file
```

### Styling Approach
- CSS Modules for component isolation
- CSS Variables for design tokens
- Hand-drawn effects with CSS transforms
- Responsive design with media queries

## 🎨 Customization

### Design Tokens
Customize the design system by modifying CSS variables:

```css
:root {
  --paper-primary: #667eea;
  --paper-secondary: #764ba2;
  --paper-text: #333;
  --paper-background: #f9f9f9;
}
```

### Component Theming
Override component styles by targeting CSS classes:

```css
.paper-button {
  --button-border-radius: 8px;
  --button-padding: 12px 24px;
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details.

## 🙏 Acknowledgments

- [Patrick Hand Font](https://fonts.google.com/specimen/Patrick+Hand) by Patrick Wagesreiter
- React and TypeScript communities
- Design system inspiration from various hand-drawn UI libraries

---

Built with ❤️ and lots of hand-drawn love
