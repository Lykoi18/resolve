import alias from '../../src/alias/$resolve.applicationName'
import normalizePaths from './normalize_paths'

test('works correctly', () => {
  expect(normalizePaths('\r\n' + alias({}).code + '\r\n')).toMatchSnapshot()
})
