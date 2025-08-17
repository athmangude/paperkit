# Paper Kit Design System

A hand-drawn, sketchy design system built with React and the Patrick Hand font. This design system creates a unique, low-fidelity aesthetic that mimics the look of hand-drawn elements on paper.

## Features

- **Hand-drawn aesthetic**: All components feature irregular, sketchy borders and lines
- **Patrick Hand font**: Handwritten-style typography throughout
- **Interactive states**: Hover, focus, and active states that simulate drawing emphasis
- **Responsive design**: Works seamlessly across all device sizes
- **TypeScript support**: Full type safety for all components
- **No external dependencies**: Built from scratch without UI libraries
- **SSR compatible**: Works with Next.js, Remix, and other SSR frameworks

## Components

### Typography
- **Heading**: H1-H3 headings with wavy underlines
- **BodyText**: Standard paragraph text
- **Link**: Links with hand-drawn underlines

### Buttons
- **Button**: Three sizes (small, medium, large) and variants (outline, primary, secondary)
- **IconButton**: Circular buttons with hand-drawn icons
- Interactive states: hover, active, disabled
- Support for icons and irregular shapes

### Form Inputs
- **Input**: Text inputs with hand-drawn borders
- **TextArea**: Multi-line text areas
- **Checkbox**: Hand-drawn checkboxes with sketchy check marks
- **Radio**: Radio buttons with hand-drawn circles and dots
- **Toggle**: Toggle switches with sketchy tracks and thumbs
- **Slider**: Horizontal sliders with hand-drawn tracks

### Progress & Indicators
- **ProgressBar**: Hand-drawn progress bars with uneven edges
- **Badge**: Circular/oval notification badges with hand-drawn borders
- Multiple variants and sizes for both components

### Containers & Layouts
- **Card**: Rectangular containers with pencil shadow effects
- **Divider**: Hand-drawn separators with various styles (dashed, dotted, wavy)
- Multiple elevation levels and padding options

### Navigation & Organization
- **Tabs**: Navigation tabs with hand-drawn outlines
- **Pagination**: Page navigation with sketchy buttons
- **Accordion**: Collapsible content containers
- **Lists & Tables**: Structured data display with hand-drawn borders

### Feedback & Alerts
- **Modal**: Overlay dialogs with sketchy borders
- **Notification**: Toast messages with shaky animations
- **Tooltip**: Hover information with hand-drawn speech bubbles

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The design system showcase will be available at `http://localhost:5173`

### Building

```bash
npm run build
```

## Usage

### Basic Example

```tsx
import { Button, Input, Card, Heading } from './components';

function MyComponent() {
  return (
    <Card elevation="medium" padding="large">
      <Heading level={2}>My Form</Heading>
      <Input 
        placeholder="Enter your name"
        onChange={(value) => console.log(value)}
      />
      <Button variant="primary" size="large">
        Submit
      </Button>
    </Card>
  );
}
```

### Button Variants

```tsx
// Different sizes
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>

// Different variants
<Button variant="outline">Outline</Button>
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>

// Icon buttons
<IconButton icon="★" size="medium" />
<IconButton icon="♥" variant="primary" />

// States
<Button disabled>Disabled</Button>
```

### Progress & Badges

```tsx
// Progress bars
<ProgressBar value={75} max={100} showLabel />
<ProgressBar value={60} variant="success" showLabel />
<ProgressBar value={30} variant="warning" showLabel />

// Badges
<Badge>5</Badge>
<Badge variant="primary">New</Badge>
<Badge variant="success">✓</Badge>
<Badge variant="error">3</Badge>
```

### Dividers

```tsx
// Different divider styles
<Divider />
<Divider variant="dashed" />
<Divider variant="dotted" />
<Divider variant="wavy" />
<Divider orientation="vertical" />
```

### Form Controls

```tsx
// Input with error state
<Input 
  placeholder="Email"
  error="Please enter a valid email"
  onChange={setEmail}
/>

// Checkbox
<Checkbox 
  label="Accept terms"
  checked={accepted}
  onChange={setAccepted}
/>

// Radio buttons
<Radio 
  label="Option 1"
  value="option1"
  group="choices"
  checked={selected === 'option1'}
  onChange={() => setSelected('option1')}
/>

// Toggle switch
<Toggle 
  label="Enable notifications"
  checked={notifications}
  onChange={setNotifications}
/>

// Slider
<Slider 
  min={0}
  max={100}
  value={volume}
  onChange={setVolume}
  showValue
/>
```

### Cards

```tsx
// Different elevations
<Card elevation="low">Subtle shadow</Card>
<Card elevation="medium">Medium shadow</Card>
<Card elevation="high">Prominent shadow</Card>

// Different padding
<Card padding="small">Compact</Card>
<Card padding="medium">Standard</Card>
<Card padding="large">Spacious</Card>
```

## Design Principles

### Hand-drawn Aesthetic
- Irregular, wobbly borders and lines
- Inconsistent line weights
- Rounded corners that aren't perfectly circular
- Subtle imperfections that add character

### Interactive Feedback
- Hover states that make elements bolder
- Focus states with dashed outlines
- Active states that simulate physical interaction
- Error states with shaky animations

### Typography
- Patrick Hand font for all text
- Wavy underlines for headings
- Hand-drawn underlines for links
- Natural, readable line heights

### Color Palette
- **Paper White**: `#fefefe` - Background color
- **Ink Black**: `#1a1a1a` - Primary text and borders
- **Ink Gray**: `#666666` - Secondary text
- **Pencil Gray**: `#cccccc` - Disabled states
- **Error Red**: `#ff6b6b` - Error states
- **Success Green**: `#51cf66` - Success states
- **Warning Yellow**: `#ffd43b` - Warning states
- **Info Blue**: `#74c0fc` - Info states

## Technical Implementation

### SSR Compatibility
All components are built to be compatible with server-side rendering frameworks like Next.js and Remix. This means:
- No client-side-only code
- Proper styling during server-side build
- Universal rendering support

### Individual Component Imports
Components can be imported individually without requiring the entire library:

```tsx
import { Button } from 'paper-kit/components/button';
import { Card } from 'paper-kit/components/card';
import { ProgressBar } from 'paper-kit/components/progress-bar';
```

### Self-contained Styling
Each component includes its own CSS module, ensuring:
- No project-wide styling dependencies
- Components work in any React project
- Easy integration and maintenance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Credits

- **Patrick Hand font**: Google Fonts
- **Design inspiration**: Hand-drawn UI patterns and sketchy aesthetics
