import isEmpty from '../src/isEmpty.js';

describe('IsEmpty', () => {
    describe('Is true', () => {
        it('With null', () => {
            expect(isEmpty(null)).toBe(true);
        });

        it('With bool', () => {
            expect(isEmpty(true)).toBe(true);
            expect(isEmpty(false)).toBe(true);
        });

        it('With numbers', () => {
            expect(isEmpty(0)).toBe(true);
            expect(isEmpty(1)).toBe(true);
            expect(isEmpty(100)).toBe(true);
            expect(isEmpty(-1)).toBe(true);
        });

        it('With empty objects/arrays', () => {
            expect(isEmpty({})).toBe(true);
            expect(isEmpty([])).toBe(true);
        });

        it('With empty strings', () => {
            expect(isEmpty('')).toBe(true);
        });
    });

    describe('Is false', () => {
        it('With arrays', () => {
            expect(isEmpty([1,2,3])).toBe(false);
        });

        it('With strings', () => {
            expect(isEmpty('abcde')).toBe(false);
        });

        it('With objects', () => {
            expect(isEmpty({'a':1})).toBe(false);
        });
    });
});