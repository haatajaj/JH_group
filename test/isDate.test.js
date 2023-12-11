import isDate from '../src/isDate.js';

describe('IsDate', () => {
    it('When valid Date-object', () => {
        //const date = new Date('2023-12-31');
        expect(isDate(new Date())).toBe(true);
        expect(isDate(new Date('2023-12-31'))).toBe(true);
        expect(isDate(new Date(2023,12,31,23,59,59,59))).toBe(true);
        expect(isDate(new Date(2023,12,31,23,59,59))).toBe(true);
        expect(isDate(new Date(2023,12,31,23,59))).toBe(true);
        expect(isDate(new Date(2023,12,31,23))).toBe(true);
        expect(isDate(new Date(2023,12,31))).toBe(true);
        expect(isDate(new Date(2023,12))).toBe(true);
        expect(isDate(new Date(2023))).toBe(true);
    });

    it('When param not Date', () => {
        expect(isDate('2023-12-31')).toBe(false);
        expect(isDate(2023-12-31)).toBe(false);
        expect(isDate(null)).toBe(false);
        expect(isDate(NaN)).toBe(false);
        expect(isDate(undefined)).toBe(false);
        expect(isDate(false)).toBe(false);
        expect(isDate(true)).toBe(false);
    });
});