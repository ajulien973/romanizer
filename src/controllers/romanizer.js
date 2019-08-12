import convertToRoman from '../util/toRoman';

module.exports = {
  deromanize(request, h) {
    const {
      params: { arabicNumber }
    } = request;

    if (typeof arabicNumber !== 'number') {
      return h.response('not a number');
    }
    return h.response({
      arabicNumberToConvert: arabicNumber,
      convertedNumberToRoman: convertToRoman(request.params.arabicNumber)
    });
  }
};
