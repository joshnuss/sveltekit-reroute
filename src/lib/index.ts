import type { Handle } from '@sveltejs/kit'
import { redirect } from '@sveltejs/kit'

export function redirections(rules: Record<string, string>): Handle {
  return ({ event, resolve }) => {
    const url = rules[event.url.pathname]

    if (url) {
      redirect(303, url)
    }

    return resolve(event)
  }
}
