const socksForSale = require('./app');

test('outputs the correct answer', () => {
    expect(socksForSale()).toBe(3);
});