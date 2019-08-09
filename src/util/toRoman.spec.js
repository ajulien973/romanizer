import convertToRoman from './toRoman';

describe('toRoman', () => {
  describe('convertToRoman', () => {
    describe('when given 1', () => {
      it('should convert it to I', () => {
        expect(convertToRoman(1)).toBe('I');
      });
    });

    describe('when given 3 (addition)', () => {
      expect(convertToRoman(3)).toBe('III');
    });

    describe('when given 9 (substraction)', () => {
      expect(convertToRoman(9)).toBe('IX');
    });

    describe('when given 87', () => {
      expect(convertToRoman(87)).toBe('LXXXVII');
    });
  });
});
