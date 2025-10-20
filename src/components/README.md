# Protokit

A comprehensive React component library with hand-drawn design system built with TypeScript.

## Installation

```bash
npm install protokit
```

or

```bash
yarn add protokit
```

## Quick Start

```tsx
import { Button, Card, Heading, BodyText } from 'protokit';

function App() {
  return (
    <Card>
      <Heading level={1}>Hello Protokit!</Heading>
      <BodyText>Welcome to the hand-drawn design system.</BodyText>
      <Button>Get Started</Button>
    </Card>
  );
}
```

## CSS Setup

Import the base styles in your main CSS file:

```css
@import 'protokit/dist/styles.css';
```

## Font Setup

Add the Patrick Hand font to your HTML:

```html
<link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap" rel="stylesheet">
```

## Components

### Typography
- `Heading` - Various heading levels with hand-drawn styling
- `BodyText` - Body text with consistent styling
- `Link` - Styled links with hand-drawn underlines

### Buttons
- `Button` - Primary, secondary, and outline variants
- `IconButton` - Icon-only buttons
- `Toggle` - Toggle switches

### Form Components
- `Input` - Text inputs with validation states
- `TextArea` - Multi-line text inputs
- `Checkbox` - Checkbox inputs
- `Radio` - Radio button inputs
- `Select` - Dropdown select inputs
- `DatePicker` - Date selection component
- `Slider` - Range slider inputs

### Layout Components
- `Card` - Container with elevation and padding options
- `Modal` - Modal dialogs
- `Divider` - Visual separators
- `NavigationBar` - Top navigation component
- `Hero` - Hero section component

### Data Display
- `Table`, `TableHeader`, `TableRow`, `TableCell` - Table components
- `List`, `ListItem` - List components
- `Pagination` - Page navigation
- `ProgressBar` - Progress indicators
- `Badge` - Status badges
- `Tag` - Categorization tags
- `Tooltip` - Hover tooltips

### Interactive Components
- `Tabs`, `TabItem` - Tab navigation
- `Accordion`, `AccordionItem` - Collapsible content
- `Menu`, `MenuItem` - Context menus
- `DropdownMenu` - Dropdown menus
- `Notification` - Toast notifications

## Documentation

Visit [protokit.github.io](https://protokit.github.io) for complete documentation, examples, and interactive demos.

## License

MIT
