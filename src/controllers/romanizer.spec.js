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
      it('should return a readable stream', () => {
        const request = {
          params: {
            arabicNumber: 1
          }
        };
        const h = {
          event: a => a
        };
        expect(romanizer.deromanize(request, h).readable).toBe(true);
      });

      it('should implement _read function to push the data to send', () => {
        const request = {
          params: {
            arabicNumber: 1
          }
        };
        const h = {
          event: a => a
        };

        // when
        const returnedReadableEvent = romanizer.deromanize(request, h);
        returnedReadableEvent.push = jest.fn();
        returnedReadableEvent._read();

        // then
        expect(returnedReadableEvent.push).toHaveBeenCalledWith(
          "{\"arabicNumberToConvert\":1,\"convertedNumberToRoman\":\"I\"}"
        );
      });
    });
  });
});
