import type { Handle } from '@sveltejs/kit'

export function redirections(rules: Record<string, string>): Handle {
  return ({ event, resolve }) => {
    const url = rules[event.url.pathname]

    if (url) {
      return Response.redirect(url, 303)
    }

    return resolve(event)
  }
}
