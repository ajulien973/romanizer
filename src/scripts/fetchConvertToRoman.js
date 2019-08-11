(({ document }) => {
  document.querySelector('.toRomanForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const convertForm = document.querySelector('.toRomanForm');
    const numberToConvert = document.querySelector('#number').value;
    const method = convertForm.method.toUpperCase();
    let action = convertForm.action;

    let options = {};
    switch (method) {
      case 'POST':
        options.body = JSON.stringify({
          value: numberToConvert,
        });
        break;
      case 'GET':
        options.method = method;
        options.headers = {'Content-Type': 'application/json'};
        action = `${action}/${numberToConvert}`;
        break;
    }

    fetch(action, options)
      .then(response => response.json())
      .then(data => {
        const resultContainer = document.querySelector('#result > p');
        const {
          convertedNumberToRoman = '',
        } = data;
        resultContainer.innerText = convertedNumberToRoman;
      });
  });
})(this.window);
