const romanizer = require('./romanizer.js');

describe('romanizer', () => {
  describe('deromanize', () => {
    describe('when given param is not a number', () => {
      it('should return an error message', () => {
        const request = {
          params: {
            arabicNumber: 'not a number'
          }
        };
        const h = {
          response: a => a
        };
        expect(romanizer.deromanize(request, h)).toBe('not a number');
      });
    });

    describe('when an arabic number is given as param', () => {
      it('should convert it to roman', () => {
        const request = {
          params: {
            arabicNumber: 1
          }
        };
        const h = {
          response: a => a
        };
        expect(romanizer.deromanize(request, h)).toStrictEqual({
          arabicNumberToConvert: 1,
          convertedNumberToRoman: 'I'
        });
      });
    });
  });
});
