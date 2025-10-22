# Direct navigation to non-root pages on docs site doesn't work

This issue occurs only in the production environment. When users try to directly navigate to non-root documentation pages, such as `https://athmangude.github.io/protokit-ui/showcase`, they are presented with a 404 error page. However, when navigating via the site's navigation bar, these same pages load as expected.

Notably, direct navigation works correctly only for the root landing page: `https://athmangude.github.io/protokit-ui/`. Any attempt to access subpages directly fails, which makes it impossible for users to bookmark or share links to specific docs pages.


## Expectations after fix

1. Directly navigating to `https://athmangude.github.io/protokit-ui/showcase` should show me the show case page
2. Directly navigating to a non existent page `https://athmangude.github.io/protokit-ui/non-existent-page` should show me the 404 page.