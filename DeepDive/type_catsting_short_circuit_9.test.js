test('explicit coercion', () => {
    let x = 10;
    expect(typeof(x.toString())).toBe('string');
    expect(typeof(x)).toBe('number');
});

test('implicit coercion', () => {
    var x = 10;
    var s = x + '';
    expect(typeof s).toBe('string');
    expect(x + '').toBe(x.toString());
});

test('falsy value', () => {
    expect(!false).toBe(true);
    expect(!undefined).toBe(true);
    expect(!null).toBe(true);
    expect(!0).toBe(true);
    expect(!NaN).toBe(true);
    expect(!'').toBe(true);
});

test('short circuit', () => {
    expect('A' || 'B').toBe('A');
    expect('A' && 'B').toBe('B');
});

test('optional chaining', () => {
    let emt = null;
    expect(emt?.length).toBe(undefined);

    emt = 'emv value';
    expect(emt?.length).toBe(emt && emt.length);

    emt = '';
    expect(emt?.length).toBe(0);
    expect(emt && emt.length).toBe('');
});

test('nullish coalescing', () => {
    var foo = null ?? 'default';
    expect(foo).toBe('default');

    expect('value' || 'default').toBe('value' ?? 'default');

    expect(0 || 'default').toBe('default');
    expect(0 ?? 'default').toBe(0)
});