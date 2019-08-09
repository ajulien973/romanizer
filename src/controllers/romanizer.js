import convertToRoman from '../util/toRoman';

module.exports = {
  deromanize(request, h) {
    const {
      params: { arabicNumber }
    } = request;

    if (typeof arabicNumber !== 'number') {
      h.response('not a number');
    }
    return h.response(convertToRoman(request.params.arabicNumber));
  }
};
