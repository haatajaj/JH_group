import add from '../src/add.js';
//const add = require('../src/add');

describe('Add', () => {
    describe('Integers', () => {
        it('Add positive numbers correctly', () => {
            expect(add(1,1)).toBe(2);
        });

        it('Add negative numbers correctly', () => {
            expect(add(-1,-1)).toBe(-2);
        });

        it('Add with zero(es) correctly', () => {
            expect(add(0,1)).toBe(1);
            expect(add(0,0)).toBe(0);
        });
    });

    describe('Floats', () => {
        it('Add positive floats correctly', () => {
            expect(add(1.11,1.1)).toBe(2.21);
            expect(add(0.2,0.2)).toBe(0.4);
        });

        it('Add negative floats correctly', () => {
            expect(add(-0.2,-0.2)).toBe(-0.4);
        });

        it('Add with zero(es) correctly', () => {
            expect(add(1,0)).toBe(1);
            expect(add(0,1)).toBe(1);
            expect(add(0.0,0.0)).toBe(0);
        });


    });

    describe('Non-standard...', () => {
        it('Add strings correctly', () => {
            expect(add('a','b')).toBe('ab');
        });

        it('Add with no args', () => {
            expect(add()).toBe(0);
        });

        it('Add undef', () => {
            expect(add(undefined,undefined)).toBe(0);
        });
    });
});