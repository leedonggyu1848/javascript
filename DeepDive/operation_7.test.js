test('prefix increment order', () => {
    let x = 3;
    let result = ++x;
    expect(x).toBe(4);
    expect(result).toBe(4);
});

test('postfix increment order', () => {
    let x = 3;
    let result = x++;
    expect(x).toBe(4);
    expect(result).toBe(3);
});

test('to number with +operator', () => {
    let x = '5';
    expect(+x).toBe(5);

    x = true;
    expect(+x).toBe(1);

    x = 'hello'
    expect(+x).toBe(NaN);

    let obj = {
        'a' : 123
    };
    expect(+obj).toBe(NaN);
});

test('to be string with +(concat)operator', () => {
    expect('a' + 3).toBe('a3');
    let obj = { 'a' : 123 };
    expect(Number(obj)).toBe(NaN);
    expect(obj+3).toBe(obj.toString()+'3');
});

test('to be number with +(concat)opreator', () => {
    expect(1+true).toBe(2);
    expect(1+undefined).toBe(NaN);
});

test('comparison operator', () => {
    expect(1=='1').toBe(true);

    /* anti pattern */
    expect(0 == '').toBe(true);
    expect(false == 'false').toBe(false);
    expect(false == null).toBe(false);
    /* anti pattern end */

    expect(1==='1').toBe(false);
    expect(1 !=='1').toBe(true);
    expect(NaN === NaN).toBe(false);
    expect(isNaN(NaN)).toBe(true);
    expect(+0 === -0).toBe(true);

    // es6
    expect(Object.is(-0, +0)).toBe(false);
    expect(Object.is(NaN, NaN)).toBe(true);
});

test('to be boolean with !operator', () => {
    expect(!0).toBe(true);
    expect(!'Hello').toBe(false);
});

test('comma operator', () => {
    expect((1, 2, 3)).toBe(3);
    expect((() => {return 1,2,3})()).toBe(3);
});