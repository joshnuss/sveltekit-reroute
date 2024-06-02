# sveltekit-reroute

A SvelteKit handler for redirection rules.

This is useful for URL shortening, correcting misspelled words, or for deprecating URLs.

## Usage

Install package:

```
pnpm i -D sveltekit-reroute
```

Add to `src/hooks.server.js`:

```javascript
import { reroute } from 'sveltekit-reroute'
import { sequence } from '@sveltejs/kit/hooks'

export const handle = sequence([
  reroute({
    '/github': 'https://github.com/joshnuss',
    '/documentation': '/docs'
  }),

  // more handlers...
])
```

## Similar Packages

- [sveltekit-hook-redirect](https://github.com/svackages/sveltekit-hook-redirect) by [@dreitzner](https://github.com/dreitzner)

## License

MIT
