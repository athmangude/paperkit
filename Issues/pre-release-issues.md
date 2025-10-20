# Pre-release issues

## Status: All Issues Closed ✅

**Last Updated:** All issues have been resolved and implemented. Component documentation has been updated to accurately reflect required properties. Font icons have been integrated throughout the project using react-icons.

## List of issues

### 1. Radio buttons do not show correct status change when clicked
#### Status: Closed

- It appears that radio buttons cannot change state to show the active status on the new clicked radio button

### 2. Badges are oval in shape insted of circles
#### Status: Closed

Badges are oval

#### Instructions

- Add a limit to the bumber of characters allowed on the badges
- Largest number displayed will be 99 after which "99+" will be displayed


### 3. Modal flickers when opened
#### Status: Closed

When the modal is opened there can sometimes be too much flickering

### 4. Tooltips don't appear next to the hovered item
#### Status: Closed

When a component with a tooltip is hovered over, the tooltip appears once then drifts away and doesn't show on subsequent hovers.

### 5. Error icon is too close to text when input field has error
#### Status: Closed

In error states, the icon is too close to the text. See attached image in terminal

### 6. Tooltips not-rendering
#### Status: Closed

Rendering of tooltips stopped completely after fixing issue #4

### 7. Table display in showcase
#### Status: Closed

- The column row should be divided into cells and not look merged
- remove the last column showing badges
- First column is not populated leaving last content column headerless

### 8. Use design system small buttons in getting started section of showcase and documentation
#### Status: Closed

- Instead of blue buttons use, design system small buttons
- Place the button top right of relevant content
- When copy button is clicked, show, "copied", reset after 3 seconds

### 8. Heading 2 issues
#### Status: Closed

- Heading 2 should be left aligned like heading 1 and heading 3
- Heading 2 uses a larger font than heading 1
- Check font sizing for the rest of the headings ensuring smaller headings user smaller font size

### 9. Tooltip issues
#### Status: Closed

- [Closed] Tooltip renders after hovering away from target component
- [Closed] Tooltip is rendered in parent component instead of appropriate position next to target component

### 10. Documentation issues
#### Status: Closed

##### Pages
- [Closed] Separate documentation and landing page into separate pages. The pages should have separate routes i.e., a landing page at /, documentation at /documentation, a showcase page at /showcase 
- [Closed] Documentation does not include all components. It should include all components in this design system
- [Closed] Apply the same header component across all pages. The header used in the documentation page is ideal
- [Closed] The title should always remain the same across all pages
- [Closed] clicking the title should lead to the landing page at /
- [Closed] the title should always read "Paperkit"
- [Closed] remove the "home" link on the navigation bar since the / link exists on the label "paperkit"
- [Closed] remove max width on documentation page. All pages should be wrapped with the same container component for consistency. The same navigation header component used in the landing page should be used across the three pages and all subsequent pages. Make it a reusable component
- [Closed] There is no consistency in the header and hero layout between the showcase page and the rest of the pages. Do not change the color of the header to gradient colors please. I like it the way it is.
- [Closed] create an about page at /about. The about page should include the inspiration for it i.e., designing low fidelity designs in figma and wantint to continue doing it in React with vibe coding. Mention when it's relevant to use it including when there is no design system in place and you just want to present a UX flow
- [Closed] add space between hero component and the content that follows it in the documentation page
- [Closed] on the navigation bar the button with the link of the active page should be a primary button
- [Closed] in all pages, all direct children of hero components should be centered i.e., if the direct children of the hero unit is cards, the cards should be centered, not the content inside cards. If it's text, the text should be centered
- [Closed] in the show case page, under dashboard interface, use tags instead of badges to show status on the orders list
- [Closed] badges should have a size property with options small, medium, large. Default is small. Add these options and demonstrate the variants in the documentation page under badges
- [Closed] Component documentation is not accurate. Properties that should be required are not shown as required in the documentation. This requires a thorough scrutinty of the component implementation to identify all properties and highlight those that are required.

##### Layout
- [Closed] Create a hero unit component. It should have a bottom border matching the button border. It's also a flex-container with column flex-direction, content center aligned and center justified. It does not have any background colors. It has a top and bottom padding of 50px and 20 px bottom margin.
- [Closed] Replace all hero components in the pages with the reusable component
- [Closed] add a navigation bar component. The navigation bar should match the current navigation bar. It should take in a `title` and `navigationComponents` props where title is the current page title and navigation components is a component with the navigation items which can be a container with buttons etc.
- [Closed] Navigation bar should have a bottom border matching similar to the one used for buttons
- [Closed] use our design system navigation bar across all pages
- [Closed] Add the hero and navigation bar components to the documentation under layout and showcase

##### Lists
- [Closed] list item borders should match those of basic buttons
- [Closed] remove border on the List component containing list items
- [Closed] when a list item is selected it's text is not visible. Introduce a selected property for a listItem. When an item is selected, its background is black and text is white
- [Closed] hovering on a selected list item should not change its background color

##### Menus
- [Closed] Add Menus should display a list of provided options. The list items should have borders similar to the button borders, 2px solid black. The menu should have a 2px solid black border with bottom border radius similar to what we use for buttons. No top border radius. Menu items have bottom borders 2px solid black except that last item
- [Closed] Add dropdown menus which are like menus above except that they are visible after clicking an another wrapped component e.g., icon button. The drop down menu is hidden upon clicking away from it.
- [Closed] Add all menus to documentation
- [Closed] All menus except dropdown menus should support the optional specification of a `selected` item.
- [Closed] documentation should correctly implement onChange to set the selected menu item and show the change of the selected item on the menu
- [Closed] Don't show an alert when a menu item is clicked on select menus, instead show the change of the selection on the menu

##### Input
- [Closed] Render props table and components separately for each input component instead of a showcase form
- [Closed] Where there are variants involved, render the components and example usage code for all variants. Also do this for all other components with variants
- [Closed] All input components should be grouped under input including radio buttons and checkboxes
- [Closed] Add select input menus that display a drop down list of items with the selected item above the list of available items. List items should have similar borders to buttons. Only the last item in the menu should have rounded border bottom radius. The active item should have similar borders to the button borders but no border radius.

##### Notifications
- [Closed] Show buttons to trigger all notification variants
- [Closed] Notification should not have a background color. Only the icon in the notification should be used to differentiate with a badge component with a background color
- [Closed] The notification variants should use different icons, cross for error, info for info, warning for warning etc.

##### Showcase
- [Closed] Create a showcase page and showcase extensive usage of the design system for forms with one form, a social media feed, user profile, dashboard
- [Closed] Display the showcased usecase in different tabs
- [Closed] display the showcased usecases outside of tabs top to bottom

##### Icons
- [Closed] use material design icons instead of system icons
- [Closed] Use font-icons in the showcase page


### 11. Remove interactive examples below documentation
#### Status: Closed

- [Closed] The interactive examples section should not be shown in documentation
