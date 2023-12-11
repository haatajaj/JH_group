import chunk from '../src/chunk.js';

describe('Chunk', () => {
    it('With no argument', () => {
        expect(chunk()).toEqual([]);
    });

    it('With an empty array', () => {
        expect(chunk([])).toEqual([]);
    });

    it('With no length parameter', () => {
        expect(chunk(['a'])).toEqual([['a']]);
        // Should not fail, receives [["d"], , , ] form chunk
        expect(chunk(['a','b','c','d'])).toEqual([['a'],['b'],['c'],['d']]);
    });

    it('With a length parameter', () => {
        expect(chunk(['a','b','c','d'],4)).toEqual([['a','b','c','d']]);
        // Should not fail, receives [["c", "d"], ] form chunk
        expect(chunk(['a','b','c','d'],2)).toEqual([['a','b'],['c','d']]);
    });

    //Non-array should probably fail
    it('With a non-array parameter', () => {
        expect(chunk("abc")).toThrow();
        expect(chunk(123)).toThrow();
        expect(chunk(true)).toThrow();
        expect(chunk(false)).toThrow();
        expect(chunk({'a':1,'b':1})).toThrow();
        expect(chunk(undefined)).toThrow();
        expect(chunk(null)).toThrow();
        expect(chunk(NaN)).toThrow();
    });
});