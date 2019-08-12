import Stream from 'stream';
import convertToRoman from '../util/toRoman';

module.exports = {
  deromanize(request, h) {
    const { Readable } = Stream;
    const {
      params: { arabicNumber }
    } = request;

    if (typeof arabicNumber !== 'number') {
      return h.response('not a number');
    }

    const data = {
      arabicNumberToConvert: arabicNumber,
      convertedNumberToRoman: convertToRoman(request.params.arabicNumber)
    };

    const readableStream = Readable();

    readableStream._read = () => {
      readableStream.push(JSON.stringify(data));
    };

    return h.event(readableStream);
  }
};
