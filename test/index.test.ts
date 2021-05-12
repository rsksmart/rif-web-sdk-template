import { RIFScheduler } from '../src'

describe('hello', () => {
  test('hello', () => {
    const scheduler = new RIFScheduler()
    expect(scheduler.hello()).toBe('hello')
  })
})
