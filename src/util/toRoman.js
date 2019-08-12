const convertToRoman = arabicNumber => {
  const decimal = [100, 90, 50, 40, 10, 9, 5, 4, 1];
  const roman = ['C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let result = '';
  let num = arabicNumber;

  decimal.forEach((value, index) => {
    while (num % value < num) {
      result += roman[index];
      num -= value;
    }
  });
  return result;
};

export default convertToRoman;
