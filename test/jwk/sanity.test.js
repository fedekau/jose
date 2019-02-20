const test = require('ava')

const { JWK: { generateSync } } = require('../..')

test('"use" must be either `alg` or `enc`', t => {
  ;[[], false, true, null, Infinity, 0].forEach((val) => {
    t.throws(
      () => generateSync('oct', undefined, { use: val }),
      { instanceOf: TypeError, message: '`use` must be either "sig" or "enc" string when provided' }
    )
  })
})

test('"alg" must be a non-empty string', t => {
  ;[[], false, true, null, '', Infinity, 0].forEach((val) => {
    t.throws(
      () => generateSync('oct', undefined, { alg: val }),
      { instanceOf: TypeError, message: '`alg` must be a non-empty string when provided' }
    )
  })
})

test('"kid" must be a non-empty string', t => {
  ;[[], false, true, null, '', Infinity, 0].forEach((val) => {
    t.throws(
      () => generateSync('oct', undefined, { kid: val }),
      { instanceOf: TypeError, message: '`kid` must be a non-empty string when provided' }
    )
  })
})
