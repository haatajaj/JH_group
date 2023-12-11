import ceil from '../src/ceil.js';

describe('Ceil', () => {
    describe('With positive precision', () => {
        it('To round up floats', () => {
            expect(ceil(1.11,1)).toBe(1.2);
            expect(ceil(1.001,1)).toBe(1.1);
            expect(ceil(1.11,2)).toBe(1.11);
            expect(ceil(1.11,3)).toBe(1.11);
            expect(ceil(1.111111,6)).toBe(1.111111);
        });

        it('To round up integers', () => {
            expect(ceil(1,1)).toBe(1);
            expect(ceil(1,10)).toBe(1);
        });

        it('To round up strings as numbers', () => {
            expect(ceil('1.123',1)).toBe(1.2);
            expect(ceil('01.123',1)).toBe(1.2);

        });

        it('To round up zero', () => {
            expect(ceil(0,1)).toBe(0);
        });
    });

    describe('With negative precision', () => {
        it('To round up floats', () => {
            expect(ceil(101,-1)).toBe(110);
            expect(ceil(1.1,-1)).toBe(10);
            expect(ceil(1010,-1)).toBe(1010);
            expect(ceil(1011,-1)).toBe(1020);
            expect(ceil(12345,-3)).toBe(13000);
        });

        it('To round up integers', () => {
            expect(ceil(1,-1)).toBe(10);
            expect(ceil(12345,-4)).toBe(20000);
            expect(ceil(12345,-5)).toBe(100000);
        });

        it('To round up strings as numbers', () => {
            expect(ceil('1.123',-1)).toBe(10);
            expect(ceil('01.123',-1)).toBe(10);

        });

        it('To round up zero', () => {
            expect(ceil(0,-1)).toBe(0);
        });
    });

    describe('With no precision.', () => {
        it('To round up floats', () => {
            expect(ceil(101.2)).toBe(102);
            expect(ceil(1.1)).toBe(2);
            expect(ceil(1234.5)).toBe(1235);
        });

        it('To round up integers', () => {
            expect(ceil(1)).toBe(1);
            expect(ceil(12345)).toBe(12345);            
        });

        it('To round up with zero precision', () => {
            expect(ceil(1,0)).toBe(1);
            expect(ceil(1.2,0)).toBe(2);
        });

        it('To round up zero', () => {
            expect(ceil(0)).toBe(0);
        });

        it('To round up undefined', () => {
            expect(ceil(undefined)).toBe(NaN);
        });

        it('To round up infinity', () => {
            expect(ceil(Infinity)).toBe(Infinity);
            expect(ceil(-Infinity)).toBe(-Infinity);
        });

        it('To round up NaN', () => {
            expect(ceil(NaN)).toBe(NaN);
        });
    });


});