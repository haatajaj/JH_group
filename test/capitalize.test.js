import capitalize from '../src/capitalize.js';

describe('Capitalize', () => {
    describe('Single string', () => {
        it('That is capitalized', () => {
            expect(capitalize('Test')).toBe('Test');
        });

        it('That is uppercase', () => {
            expect(capitalize('TEST')).toBe('Test');
        });

        it('That has uppercase characters', () => {
            expect(capitalize('TeSt')).toBe('Test');
            expect(capitalize('tEsT')).toBe('Test');
        });

        it('That is lowercase', () => {
            expect(capitalize('test')).toBe('Test');

        });

        it('That is empty', () => {
            expect(capitalize('')).toBe('');
        });

        it('That starts with numbers', () => {
            expect(capitalize('1TEST')).toBe('1test');
            expect(capitalize('TEST1')).toBe('Test1');
        });

        it('That is a number', () => {
            expect(capitalize('12345')).toBe('12345');
        });

        it('That is a special character', () => {
            expect(capitalize('&')).toBe('&');
        });
    });

    describe('String with spaces', () => {
        it('That is capitalized', () => {
            expect(capitalize('Test test')).toBe('Test test');
            expect(capitalize('Test test test')).toBe('Test test test');

        });

        it('That is uppercase', () => {
            expect(capitalize('TEST TEST')).toBe('Test test');
        });

        it('That has uppercase characters', () => {
            expect(capitalize('TeSt tEsT')).toBe('Test test');
            expect(capitalize('tEsT TeSt')).toBe('Test test');
        });

        it('That is lowercase', () => {
            expect(capitalize('test test')).toBe('Test test');

        });

        it('That starts with numbers', () => {
            expect(capitalize('1TEST 1test')).toBe('1test 1test');
            expect(capitalize('TEST1 test1')).toBe('Test1 test1');
        });

        it('That is a number', () => {
            expect(capitalize('12345 12345')).toBe('12345 12345');
        });
    });

    describe('Other datatype', () => {
        it('That is a number', () => {
            expect(capitalize(12345)).toThrow();
        });

        it('That is an array', () => {
            expect(capitalize([])).toThrow();
            expect(capitalize([[1,2],[2,3]])).toThrow();
            expect(capitalize([['a','B'],['C','D']])).toThrow();
        });

        it('That is an object', () => {
            expect(capitalize({'a':1})).toThrow();
            expect(capitalize({'a':{'b':1}})).toThrow();
        });

        it('That is undefined', () => {
            expect(capitalize(undefined)).toThrow();
        });

        it('That is null', () => {
            expect(capitalize(null)).toThrow();
        });
    });
});