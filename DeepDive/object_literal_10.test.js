test('access property', () => {
    let obj = { 
        1: 10,
        '[object Object]': 100,
        abc: 1
    };
    let s = {};
    expect(obj[1]).toBe(obj['1']);
    expect(obj[s]).toBe(100);
    expect(obj.abc).toBe(obj['abc']);
});

test('create dynamic property', () => {
    let obj = {}
    obj.a = 'a'
    expect(obj.a).toBe('a');
    expect(obj.b).toBe(undefined);
});

test('delete property', () => {
    let obj = {a: 'a'};
    delete obj.a;
    expect(obj.a).toBe(undefined);
});

test('es6 shortcut', () => {
    let a = 10, b = 20
    let obj = { a, b };
    expect(obj.a).toBe(10);
    expect(obj.b).toBe(20);

    let obj2 = {
        hi: function(name) {
            return "Hi " + name;
        },
        hello(name) {
            return "Hello " + name;
        },
    };
    expect(obj2.hi('alpha')).toBe('Hi alpha');
    expect(obj2.hello('beta')).toBe("Hello beta");
});