
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

let timerId = null;

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
 };

const backgroundColorBody = function () {
  body.style.backgroundColor = getRandomHexColor();
};

startBtn.addEventListener('click', () => {
    timerId = setInterval(backgroundColorBody, 1000);
	 startBtn.disabled = true;
});

stopBtn.addEventListener('click', ()=> {
	clearInterval(timerId);
	startBtn.disabled = false;
});
 
 
