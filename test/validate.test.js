const test = require('ava');

const { defaults } = require('../lib');
const { validate } = require('../lib/validate');

test('defaults', (t) => {
  delete defaults.secure;
  const result = validate(defaults);
  t.falsy(result.error);
});

test('error', async (t) => {
  const error = await t.throwsAsync(() => validate({ foo: 'bar' }));
  t.is(error.message, '"foo" is not allowed');
});
