import { describe, test, expect, vi } from 'vitest'
import { redirections } from './lib'

describe('redirections', () => {
  const resolve = vi.fn()
  const handler = redirections({
    '/discord': 'https://discord.gg/1234'
  })

  test('when path matches rule, it redirects', () => {
    const event = { url: new URL('https://localhost:5173/discord') }

    try {
      handler({ event, resolve })
    } catch (redirect) {
      expect(redirect.status).toBe(303)
      expect(redirect.location).toBe('https://discord.gg/1234')
      expect(resolve).not.toHaveBeenCalled()
      return
    }

    throw Error('did not redirect')
  })

  test("when path doesn't match rule, it doesn't redirect", () => {
    const event = { url: new URL('https://localhost:5173/contact') }

    handler({ event, resolve })

    expect(resolve).toHaveBeenCalledWith(event)
  })
})
