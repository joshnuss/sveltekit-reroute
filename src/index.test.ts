import { describe, test, expect, vi } from 'vitest'
import { reroute } from './lib'

describe('reroute', () => {
  const resolve = vi.fn()
  const handler = reroute({
    '/discord': 'https://discord.gg/1234'
  })

  test('when path matches rule, it redirects', async () => {
    const event = { url: new URL('https://localhost:5173/discord') }

    const redirect = await handler({ event, resolve })

    expect(redirect.status).toBe(303)
    expect(redirect.headers.get('location')).toBe('https://discord.gg/1234')
    expect(resolve).not.toHaveBeenCalled()
  })

  test("when path doesn't match rule, it doesn't redirect", async () => {
    const event = { url: new URL('https://localhost:5173/contact') }

    await handler({ event, resolve })

    expect(resolve).toHaveBeenCalledWith(event)
  })
})
