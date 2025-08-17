# Paper Kit Design System

A hand-drawn, sketchy design system built with React and the Patrick Hand font. This design system creates a unique, low-fidelity aesthetic that mimics the look of hand-drawn elements on paper.

## Features

- **Hand-drawn aesthetic**: All components feature irregular, sketchy borders and lines
- **Patrick Hand font**: Handwritten-style typography throughout
- **Interactive states**: Hover, focus, and active states that simulate drawing emphasis
- **Responsive design**: Works seamlessly across all device sizes
- **TypeScript support**: Full type safety for all components
- **No external dependencies**: Built from scratch without UI libraries

## Components

### Typography
- **Heading**: H1-H3 headings with wavy underlines
- **BodyText**: Standard paragraph text
- **Link**: Links with hand-drawn underlines

### Buttons
- **Button**: Three sizes (small, medium, large) and variants (outline, primary, secondary)
- Interactive states: hover, active, disabled
- Support for icons

### Form Inputs
- **Input**: Text inputs with hand-drawn borders
- **TextArea**: Multi-line text areas
- **Checkbox**: Hand-drawn checkboxes with sketchy check marks
- **Radio**: Radio buttons with hand-drawn circles and dots
- **Toggle**: Toggle switches with sketchy tracks and thumbs
- **Slider**: Horizontal sliders with hand-drawn tracks

### Containers
- **Card**: Rectangular containers with pencil shadow effects
- Multiple elevation levels and padding options

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

// States
<Button disabled>Disabled</Button>
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
