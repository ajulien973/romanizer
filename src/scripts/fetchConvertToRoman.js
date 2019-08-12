(({ document }) => {
  document.querySelector('.toRomanForm').addEventListener('submit', e => {
    e.preventDefault();
    const numberToConvert = document.querySelector('#number').value;

    const sseSource = new EventSource(`/deromanize/${numberToConvert}`);
    sseSource.addEventListener('message', event => {
      const resultContainer = document.querySelector('#result > p');
      const { data } = event;
      const { convertedNumberToRoman = '' } = JSON.parse(data);
      resultContainer.innerText = convertedNumberToRoman;
      sseSource.close();
    });
  });
})(this.window);
