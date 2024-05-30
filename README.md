# sveltekit-redirections

A SvelteKit handler for redirection rules.

This is useful for URL shortening, correcting commonly misspelled words, or for deprecating URLs.

## Usage

Install package:

```
pnpm i -D sveltekit-redirections
```

Add to `src/hooks.server.js`:

```
import { redirections } from 'sveltekit-redirections'

export const handle = sequence([
  redirections({
    '/github': 'https://github.com/joshnuss',
    '/documentation': '/docs'
  }),

  // more handlers...
])
```
