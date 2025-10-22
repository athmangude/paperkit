# Direct navigation to non-root pages on docs site doesn't work

This issue occurs only in the production environment. When users try to directly navigate to non-root documentation pages, such as `https://athmangude.github.io/protokit-ui/showcase`, they are presented with a 404 error page. However, when navigating via the site's navigation bar, these same pages load as expected.

Notably, direct navigation works correctly only for the root landing page: `https://athmangude.github.io/protokit-ui/`. Any attempt to access subpages directly fails, which makes it impossible for users to bookmark or share links to specific docs pages.


## Instructions to fix
- Create public/404.html
- Create public/.nojekyll
- ensure the solutions works locally before deploying to github pages

### Handling non-existent routes

When a user visits a non-existent route like https://athmangude.github.io/protokit-ui/nonexistent-page, GitHub Pages will serve our 404.html file, which redirects to the root. This means:
1. User Experience: The user ends up on the homepage instead of seeing a proper 404 page
2. SEO Impact: Search engines might index the wrong content for non-existent URLs
3. Analytics: We lose visibility into what users were actually looking for

#### Smart 404 Handling

Strategy: Enhanced 404.html with React Router Integration

Instead of a simple redirect, we'll create a more sophisticated approach:

1. Enhanced 404.html:

- Capture the original URL that caused the 404
- Pass it to the React app via URL parameters or localStorage
- Let React Router handle the 404 display

2. React Router 404 Route:
- Add a catch-all route (*) in the React Router configuration
- Create a proper 404 component that shows:
  - "Page not found" message
  - The attempted URL
  - Navigation back to valid pages