test('value of result from expression', () => {
    expect(10 + 20).toBe(30);
});

test('type of literal', () => {
    expect(typeof(10)).toBe('number');
    expect(typeof(10.5)).toBe('number');
    expect(typeof(0b101010)).toBe('number');
    expect(typeof(0o0712)).toBe('number');
    expect(typeof(0xafd01)).toBe('number');
    expect(typeof('Hello')).toBe('string');
    expect(typeof("World")).toBe('string');
    expect(typeof(`aaa`)).toBe('string');
    expect(typeof(true)).toBe('boolean');
    expect(typeof(null)).toBe('object');
    expect(typeof(undefined)).toBe('undefined');
    expect(typeof({name:'a', addr:'addr'})).toBe('object');
    expect(typeof([1,2,3])).toBe('object');
    expect(typeof(function(){})).toBe('function');
    expect(typeof(/[A-Z]/)).toBe('object');
});

test('expression(표현식)은 값으로 평가될 수 있는 statement(문)이다.', () => {
    var sum = 1;
    expect(sum).toBe(1);
    expect(sum = 10).toBe(10);
    expect(sum !== 10).toBe(false);
    expect(sum + 3).toBe(13);
});

//statement는 프로그램을 구성하는 기본 단위이자 최소 실행 단위
//토큰은 문법적인 의미를 가지며, 문법적으로 더 이상 나눌 수 없는 코드의 기본 요소

test('ASI(automatic semicolon insertion)', () => {
    function foo () {
        return
        0
    }
    expect(foo()).toBe(undefined);
});

