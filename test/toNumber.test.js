import toNumber from '../src/toNumber.js';

describe('ToNumber', () => {
    describe('With numbers', () => {
        it('Integers', () => {
            expect(toNumber(0)).toBe(0);
            expect(toNumber(1)).toBe(1);
            expect(toNumber(-1)).toBe(-1);
            expect(toNumber(Infinity)).toBe(Infinity);
            expect(toNumber(-Infinity)).toBe(-Infinity);
        });

        it('Floats', () => {
            expect(toNumber(1.2)).toBe(1.2);
            expect(toNumber(1.23456789)).toBe(1.23456789);
            expect(toNumber(Number.MAX_VALUE)).toBe(1.7976931348623157e+308);
            expect(toNumber(Number.MIN_VALUE)).toBe(5e-324);
        });
    });

    describe('Strings', () => {
        it('Basic string', () => {
            expect(toNumber('1.2')).toBe(1.2);
        });

        it('With whitespaces', () => {
            expect(toNumber('   1.2   ')).toBe(1.2);
        });

        it('With special characters', () => {
            expect(toNumber('#1.2')).toBe(NaN);
            expect(toNumber('1.2#')).toBe(NaN);
        });
    });

    describe('Other types', () => {
        it('Objects', () => {
            expect(toNumber({})).toBe(NaN);
            expect(toNumber({'a':1})).toBe(NaN)
        });

        it('Object valueOf', () => {
            expect(toNumber({valueOf: () => 1})).toBe(1)
        });

        it('Undefined', () => {
            expect(toNumber(undefined)).toBe(NaN);
        });

        it('Boolean', () => {
            expect(toNumber(true)).toBe(1);
            expect(toNumber(false)).toBe(0);
        });
    });
});