import words from '../src/words.js';

describe('Words', () => {
    describe('Basic strings', () => {
        it('Single string', () => {
            expect(words('test')).toEqual(['test']);
            expect(words('')).toEqual([]);
            expect(words('#')).toEqual([]);
            expect(words('#test')).toEqual(['test']);
            expect(words('test#')).toEqual(['test']);
            expect(words('1test')).toEqual(['1','test']);
            expect(words('test1')).toEqual(['test','1']);
        });

        it('String separated by delimeter', () => {
            expect(words('test, test, test')).toEqual(['test','test','test']);
            expect(words('test test test')).toEqual(['test','test','test']);
            expect(words(' test test test ')).toEqual(['test','test','test']);
            expect(words('fred, barney, & pebbles')).toEqual(['fred','barney','pebbles']);
        });
    });
});