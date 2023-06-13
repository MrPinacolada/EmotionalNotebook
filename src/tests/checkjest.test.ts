import { describe, expect, test } from '@jest/globals'
import { Store } from '../piniadb/index'
describe('jestcheck', () => {
  test('testjest', () => {
    expect(1 + 1).toBe(2)
  })
})
describe('pinia', () => {
  test('left-bar-closed', () => {
    expect(Store().$state.LeftBarOpener).toBe(false)
  })
})
