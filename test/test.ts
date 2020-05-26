import Settings from '../src'

describe('Get the value of settings.yaml', () => {
  test('I was able to get the value', () => {
    expect(Settings.IDOL).toStrictEqual(['島村卯月', '渋谷凛', '本田未央'])
  })
  test('Could not get value', () => {
    expect(Settings.SONG).toBe(undefined)
  })
})
