# Paper Kit Design System: Component Specification

This document outlines the visual design and interactive behavior for all core components of the "Paper Kit" design system, which is based on a low-fidelity, hand-drawn aesthetic using the Patrick Hand font.

## 1. Technical Implementation

### Framework
This design system will be implemented using React JS.

### No UI Libraries
This design system will be built from scratch. No existing UI libraries (e.g., Tailwind CSS, Material-UI, Ant Design) will be used to ensure the unique, hand-drawn aesthetic is maintained throughout all components. All styling will be done with standard CSS-in-JS or CSS modules.

### Component Structure
Components should be organized into their own folders within a main components directory. Each component folder should contain all necessary files (e.g., `Component.js`, `Component.css`).

### Styling Integration
The styling for each component should be self-contained within its own module. This will ensure that components can be imported and used anywhere without requiring a complex, project-wide styling setup.

### Server-Side Rendering (SSR)
All components must be built to be compatible with server-side rendering frameworks such as Next.js or Remix. This means avoiding client-side-only code and ensuring styling is handled correctly during the server-side build.

## 2. Usage

### Importing Components
Users should be able to import individual components directly into their projects, without needing to import the entire library or set up any special configurations. For example:

```javascript
import Button from 'paper-kit/components/Button';
import Card from 'paper-kit/components/Card';
```

## 3. Showcase

### Component Demonstration
All components must be showcased in a comprehensive demonstration application. This showcase should:

- Display every component with all its variants, sizes, and states
- Provide interactive examples that users can interact with
- Show real-world usage patterns and combinations
- Demonstrate responsive behavior across different screen sizes
- Include accessibility features and keyboard navigation
- Present components in a visually appealing, organized layout

The showcase serves as both documentation and a testing environment for all design system components.

## 4. Components

### Typography & Links

#### Headings
Headings (H1-H3) are rendered in Patrick Hand and are larger than body text. They feature a hand-drawn, wavy underline that gets less prominent with each smaller heading size.

#### Body Text
All body and paragraph text uses the Patrick Hand font in a standard, legible size.

#### Links
Links are visually distinct with a slightly wobbly, hand-drawn underline. On hover, the underline becomes thicker and darker, as if the user has emphasized it with their pen.

### Buttons & Actions

#### Default State
A simple, irregular, rectangular outline with rounded corners. The line weight is thin and inconsistent, mimicking a quick sketch.

#### Hover State
The button's outline and text become slightly bolder.

#### Active/Pressed State
The button outline thickens further, and the button appears slightly "depressed" as if pressed into the paper. The text may also become bolder.

#### Disabled State
The button's outline and text are a light, faded gray, indicating it is inactive. The outline may appear dotted or dashed.

#### Icon Buttons
A button that contains a small, hand-drawn icon instead of text. The icon's style matches the sketchy aesthetic. The button has a small, circular or irregular shape.

#### Sizes
Buttons come in three standard sizes to accommodate different use cases and layouts:
- **Small**: A compact size for actions that are less prominent. The text is slightly smaller, and the button has minimal horizontal and vertical padding.
- **Medium**: The default size for most actions. The text is standard, and the button has moderate padding.
- **Large**: For primary calls to action. The text is larger and bolder, and the button has increased horizontal and vertical padding.

### Form Inputs

#### Text Input & Text Areas
A basic, slightly imperfect rectangular box with a thin, hand-drawn outline. The line thickness is consistent with the rest of the components.

#### Focus State
The box outline becomes a thicker, dashed line.

#### Error State
The outline of the box turns into a shaky, hand-drawn red or pink line. A corresponding error message is shown below in the same color.

#### Checkboxes
An unselected checkbox is a simple, empty, hand-drawn square. When selected, a sketchy, imperfect check mark appears inside.

#### Radio Buttons
Unselected radio buttons are empty, hand-drawn circles. When selected, a solid, hand-drawn dot appears in the center.

#### Toggle Switches
Consist of a long, narrow rectangle (the track) and a circular handle (the thumb). In the on state, the track and thumb are filled with a solid, sketchy color. In the off state, they are empty outlines.

#### Date & Time Pickers
Represented by a hand-drawn calendar or clock icon. Clicking the icon reveals a modal with a simple, grid-based calendar or clock face. Days, months, and times are represented by sketchy text and circles. Selected dates are highlighted with a sketchy fill.

#### Sliders
A horizontal, hand-drawn line with a circular thumb. The thumb can be dragged along the line to select a value. The track to the left of the thumb fills in with a solid, sketchy color to show progress.

#### Progress Bar
A thin, hand-drawn rectangular track. The progress is indicated by a separate, solid, hand-drawn line that fills the track. The progress line has a slightly uneven edge.

### Containers & Layouts

#### Cards
Rectangular containers with slightly irregular, hand-drawn outlines and rounded corners. On hover, a subtle, blurred "pencil lead" shadow appears underneath, giving it a sense of elevation.

#### Accordion
A container for collapsible content. The accordion header is a sketchy bar with a hand-drawn chevron or plus/minus icon on the right side. Clicking the header expands or collapses the content area below.

#### Lists & Tables
- **Lists**: Simple, hand-drawn rectangles or lines that can have an icon, a title, and a subtitle. On hover, the entire list item may get a very faint gray background fill.
- **Tables**: Structured with hand-drawn, irregular lines for borders between cells, columns, and rows. The header row may have a slightly bolder outline or fill to differentiate it.

#### Dividers
A single, sketchy, horizontal or vertical line to separate content.

### Navigation & Organization

#### Tabs
Each tab is a simple box with a hand-drawn outline. The active tab has a thicker, darker outline and a solid fill. The inactive tabs have a faint outline and no fill.

#### Pagination
A row of buttons with hand-drawn numbers or text. The active page number is contained within a solid circle or rectangle. Navigation buttons like "Next" or "Previous" are also hand-drawn with sketchy arrows or chevrons.

### Badges & Tags

#### Badges
Small, hand-drawn circular or oval shapes, often containing a number or single icon. They are typically used for notifications.

#### Tags
Rectangular or oval elements with an irregular, hand-drawn outline. They contain text for categorization and may include a small, sketchy "X" to allow for removal.

### Feedback & Alerts

#### Modals & Dialogs
A large, sketchy, rounded rectangular box that appears on top of the screen. The background is covered by a semi-transparent, gray overlay to focus attention on the modal. The modal contains a title, a body of text, and action buttons. It is dismissed by clicking a sketchy "X" icon in the top corner or by clicking outside the modal box.

#### Notifications (Toasts)
A small, temporary, hand-drawn rectangular box that slides in from the top or bottom of the screen. It contains a brief message and a shaky "X" icon to close it.

#### Tooltips
A small, sketchy speech bubble or rectangular box with a hand-drawn tail, containing light, handwritten text. It appears on hover over a specific element and disappears when the cursor moves away.