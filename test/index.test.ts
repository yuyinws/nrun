import { describe, expect, it } from 'vitest'
import { setEmoji } from '../src/utils/emoji'

describe('emoji', () => {
  it('exported', () => {
    expect(setEmoji('dev')).toMatchInlineSnapshot(`"🛠 dev"`)
    expect(setEmoji('build')).toMatchInlineSnapshot(`"📦 build"`)
    expect(setEmoji('dev:build')).toMatchInlineSnapshot(`"📦 dev:build"`)
    expect(setEmoji('d2ev')).toMatchInlineSnapshot(`"d2ev"`)
  })
})
