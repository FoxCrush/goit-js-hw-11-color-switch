const refs = {
    bodyEl: document.querySelector('body'),
    stratBtnEl: document.querySelector('[data-action="start"]'),
    stopBtnEl: document.querySelector('[data-action="stop"]'),
    colors: [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
],
};
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
refs.bodyEl.style.backgroundColor = 'grey';

// console.log(randomIntegerFromInterval(0, colors.length - 1));
refs.stratBtnEl.addEventListener('click', () => { console.log('start btn') });
refs.stopBtnEl.addEventListener('click', () => { console.log('stop btn') });