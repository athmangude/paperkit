# Paper Kit Design System: Component Specification

This document outlines the visual design and interactive behavior for all core components of the "Paper Kit" design system, which is based on a low-fidelity, hand-drawn aesthetic using the Patrick Hand font.

## Typography & Links

Headings: Headings (H1-H3) are rendered in Patrick Hand and are larger than body text. They feature a hand-drawn, wavy underline that gets less prominent with each smaller heading size.

Body Text: All body and paragraph text uses the Patrick Hand font in a standard, legible size.

Links: Links are visually distinct with a slightly wobbly, hand-drawn underline. On hover, the underline becomes thicker and darker, as if the user has emphasized it with their pen.

## Technical implementation

Framework: This design system will be implemented using React JS.

No UI Libraries: This design system will be built from scratch. No existing UI libraries (e.g., Tailwind CSS, Material-UI, Ant Design) will be used to ensure the unique, hand-drawn aesthetic is maintained throughout all components. All styling will be done with standard CSS-in-JS or CSS modules.

## Components

### Buttons & Actions

Default State: A simple, irregular, rectangular outline with rounded corners. The line weight is thin and inconsistent, mimicking a quick sketch.

Hover State: The button's outline and text become slightly bolder.

Active/Pressed State: The button outline thickens further, and the button appears slightly "depressed" as if pressed into the paper. The text may also become bolder.

Disabled State: The button's outline and text are a light, faded gray, indicating it is inactive. The outline may appear dotted or dashed.

Icons: Buttons can contain small, hand-drawn icons that match the sketchy aesthetic.

Sizes: Buttons come in three standard sizes to accommodate different use cases and layouts.

Small: A compact size for actions that are less prominent. The text is slightly smaller, and the button has minimal horizontal and vertical padding.

Medium: The default size for most actions. The text is standard, and the button has moderate padding.

Large: For primary calls to action. The text is larger and bolder, and the button has increased horizontal and vertical padding.

### Form Inputs

Text Input: A basic, slightly imperfect rectangular box with a thin, hand-drawn outline. The line thickness is consistent with the rest of the components.

Focus State: The box outline becomes a thicker, dashed line.

Error State: The outline of the box turns into a shaky, hand-drawn red or pink line. A corresponding error message is shown below in the same color.

Text Areas: Larger versions of the text input, designed for multi-line text. They share the same states and behaviors.

Checkboxes: An unselected checkbox is a simple, empty, hand-drawn square. When selected, a sketchy, imperfect check mark appears inside.

Radio Buttons: Unselected radio buttons are empty, hand-drawn circles. When selected, a solid, hand-drawn dot appears in the center.

Toggle Switches: Consist of a long, narrow rectangle (the track) and a circular handle (the thumb). In the on state, the track and thumb are filled with a solid, sketchy color. In the off state, they are empty outlines.

### Sliders

Behavior: A horizontal, hand-drawn line with a circular thumb. The thumb can be dragged along the line to select a value. The track to the left of the thumb fills in with a solid, sketchy color to show progress.

Disabled State: The line and thumb are rendered in a lighter, faded gray.

### Containers & Layouts

Cards: Rectangular containers with slightly irregular, hand-drawn outlines and rounded corners. On hover, a subtle, blurred "pencil lead" shadow appears underneath, giving it a sense of elevation.

List Items: Simple, hand-drawn rectangles or lines that can have an icon, a title, and a subtitle. On hover, the entire list item may get a very faint gray background fill.

Dividers: A single, sketchy, horizontal or vertical line to separate content.

### Modals & Dialogs

Appearance: A large, sketchy, rounded rectangular box that appears on top of the screen. The background is covered by a semi-transparent, gray overlay to focus attention on the modal.

Interaction: The modal contains a title, a body of text, and action buttons. It is dismissed by clicking a sketchy "X" icon in the top corner or by clicking outside the modal box.

### Notifications & Tooltips

Notifications (Toasts): A small, temporary, hand-drawn rectangular box that slides in from the top or bottom of the screen. It contains a brief message and a shaky "X" icon to close it.

Tooltips: A small, sketchy speech bubble or rectangular box with a hand-drawn tail, containing light, handwritten text. It appears on hover over a specific element and disappears when the cursor moves away.
