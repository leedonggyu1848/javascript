test('special number', () => {
    var str = "string"
    var mul = (a, b) => a*b;
    expect(10/0).toBe(Infinity);
    expect(10/-0).toBe(-Infinity);
    expect(mul(1, str)).toBe(NaN);
});

test('template literal', () => {
    var template = `
    <ul>
        <li> one </li>
        <li> two </li>
    <ul>`;
    expect(typeof(template)).toBe('string');
});

test('expression interpolation', () => {
    var first = 'first';
    var second = 'second';
    expect(first+'-'+second) .toBe('first-second');
    var format = `${first}-${second}`;
    expect(format).toBe('first-second');
    expect(`${1+2}`).toBe('3');
});

test('symbol is guaranteed to a unique value', () => {
    var key = Symbol('key');
    expect(typeof(key)).toBe('symbol');
    var obj = {};
    obj[key] = 'value';
    var fakeKey = Symbol('key');
    expect(obj[key]).toBe('value');
    expect(obj[fakeKey]).not.toBe('value');
});

test('dynamic typing', () => {
    var foo;
    expect(typeof(foo)).toBe('undefined');
    foo = 3;
    expect(typeof(foo)).toBe('number');
    foo = "string";
    expect(typeof(foo)).toBe('string');
});