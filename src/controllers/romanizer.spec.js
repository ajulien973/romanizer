const romanizer = require('./romanizer.js');

describe('romanizer', () => {
  describe('deromanize', () => {
    test('should say Hello, roman', () => {
      const request = 'request';
      const h = 'h'
      expect(romanizer.deromanize(request, h)).toBe('Hello, roman : request : h');
    });
  });
});
