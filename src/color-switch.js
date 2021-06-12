const refs = {
    bodyEl: document.querySelector('body'),
    startBtnEl: document.querySelector('[data-action="start"]'),
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

refs.startBtnEl.addEventListener('click', StartRandomColorsSwitch);
refs.stopBtnEl.addEventListener('click', StopRandomColorSwith);

let colorSwitchIntervalId = null;
let colorSwitchIsActive = false;
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function StartRandomColorsSwitch() {
  if (colorSwitchIsActive) {
    return
  }
  colorSwitchIsActive = true;
  colorSwitchIntervalId = setInterval(() => {
    refs.bodyEl.style.backgroundColor = refs.colors[randomIntegerFromInterval(0, refs.colors.length)]
  }, 1000);
};

function StopRandomColorSwith() {
  clearInterval(colorSwitchIntervalId);
  colorSwitchIsActive = false;
};
