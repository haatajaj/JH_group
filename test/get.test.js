import get from '../src/get.js';

describe('Get', () => {
    
    let obj = {
        'a': {'aa':1},
        'b':[{'ba':2,
              'bb':3}],
        'c':undefined,
        'd':{'da':{'dda':4}}
    };
    
    it('When value from valid path', () => {
        expect(get(obj, 'b[0].bb')).toBe(3);
        expect(get(obj, ['b','0','bb'])).toBe(3);
        expect(get(obj, 'd.da.dda')).toBe(4);
        expect(get(obj, ['d','da','dda'])).toBe(4);
    });

    it('When path not valid, default value', () => {
        expect(get(obj, 'b.bb','def')).toBe('def');
        expect(get(obj, ['b','bb'], 'def')).toBe('def');
        expect(get(obj, 'd.da.dda.c','def')).toBe('def');
        expect(get(obj, ['d','da','dda','c'],'def')).toBe('def');
    });

    it('When value at path undefined', () => {
        expect(get(obj, 'c')).toBe(undefined);
        expect(get(obj, ['c'])).toBe(undefined);
    });

    it('When object is empty, default value', () => {
        expect(get({},'', 'def')).toBe('def');
    });

    it('When path not valid, undefined', () => {
        expect(get(obj, 'd.da.dda.c')).toBe(undefined);
        expect(get(obj, ['d','da','dda','c'])).toBe(undefined);
    });

    it('When param not object, undefined', () => {
        expect(get('test', 'test')).toBe(undefined);
        expect(get(1234, 1234)).toBe(undefined);
        expect(get(true, true)).toBe(undefined);
    });
});