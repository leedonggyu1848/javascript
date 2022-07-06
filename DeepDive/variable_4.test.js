test('variable assigment', () => {
    var result = 10;
    expect(result).toBe(10);
});

test('undefined variable', () => {
    var undefinedVal;
    expect(undefinedVal).toBe(undefined);
});

test('reference error', () => {
    expect(() => {(new Function('somthing'))()}).toThrow(ReferenceError);
});

test('variable hoisting', () => {
    expect(val).toBe(undefined);
    var val;
});

test('assignment with two steps', () => {
    var val1;
    val1 = 1;
    expect(val1).toBe(1);
    expect(val2).toBe(undefined);
    var val2 = 2
});

test('reassignment', () => {
    var val = 10;
    val = 20;
    expect(val).toBe(20);
});

test('naming rule', () => {
    expect(() => {new Function('var first-name')}).toThrow(SyntaxError);
    expect(() => {new Function('var 1a')}).toThrow(SyntaxError);
    expect(() => {new Function('var this')}).toThrow(SyntaxError);
})