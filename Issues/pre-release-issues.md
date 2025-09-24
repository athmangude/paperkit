# Pre-release issues

## Status: All Issues Closed ✅

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

##### Lists
- [Closed] list item borders should match those of basic buttons

##### Input
- [Closed] Render props table and components separately for each input component instead of a showcase form
- [Closed] Where there are variants involved, render the components and example usage code for all variants. Also do this for all other components with variants
- [Closed] All input components should be grouped under input including radio buttons and checkboxes

##### Notifications
- [Closed] Show buttons to trigger all notification variants
- [Closed] Notification should not have a background color. Only the icon in the notification should be used to differentiate with a badge component with a background color
- [Closed] The notification variants should use different icons, cross for error, info for info, warning for warning etc.

##### Showcase
- [Closed] Create a showcase page and showcase extensive usage of the design system for forms with one form, a social media feed, user profile, dashboard
- [Closed] Display the showcased usecase in different tabs
- [Closed] display the showcased usecases outside of tabs top to bottom


### 11. Remove interactive examples below documentation
#### Status: Closed

The interactive examples section should not be shown in documentation
