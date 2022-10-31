const sum = require('./index');

test('adding two number', () => {
    expect(sum(10, 13)).toBe(23);
});