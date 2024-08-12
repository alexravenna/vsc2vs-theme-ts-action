/**
 * Unit tests for the action's entrypoint, src/index.ts
 */

import * as themeConverter from '../src/themeConverter'

// Mock the action's entrypoint
const runMock = jest
  .spyOn(themeConverter, 'cloneRepository')
  .mockImplementation()

describe('themeConverter', () => {
  it('calls cloneRepository when imported', async () => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('../src/index')

    expect(runMock).toHaveBeenCalled()
  })
})
