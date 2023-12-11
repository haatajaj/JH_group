import defaultToAny from '../src/defaultToAny.js';

describe('DefaultToAny', () => {
        it('With valid first value', () => {
                expect(defaultToAny(1,2,3)).toBe(1);
                expect(defaultToAny('a','b')).toBe('a');
                expect(defaultToAny(true,false)).toBe(true);
                expect(defaultToAny({'a':1},{'b':2})).toEqual({'a':1});
        });

        it('With valid second value', () => {
                expect(defaultToAny(null,2,3)).toBe(2);
                expect(defaultToAny(undefined,2,3)).toBe(2);
                //defaultToAny returns NaN
                expect(defaultToAny(NaN,2,3)).toBe(2);
        });

        it('With valid third value', () => {
                expect(defaultToAny(null,null,3)).toBe(3);
                expect(defaultToAny(undefined,undefined,3)).toBe(3);
                //defaultToAny returns NaN
                expect(defaultToAny(NaN,NaN,3)).toBe(3);
        });

        it('With no valid values', () => {
                expect(defaultToAny(undefined, null, NaN)).toBe(NaN);                
                //defaultToAny returns NaN
                expect(defaultToAny(NaN, undefined, null)).toBe(null);
                //defaultToAny returns NaN
                expect(defaultToAny(null, NaN, undefined)).toBe(undefined);
        });
});