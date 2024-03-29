import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const startBtn = document.querySelector('button[data-start]');
const dateChosen = document.querySelector('#datetime-picker');
const day = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

let intervalId = null;

startBtn.disabled = true;

const options = {
	enableTime: true,
	time_24hr: true,
	defaultDate: new Date(),
	minuteIncrement: 1,
	onClose(selectedDates) {

	  if(selectedDates[0] <=  new Date()) {
		startBtn.disabled = true;
		Notiflix.Notify.warning('Please choose a date in the future');
		return;
	  } else {
		startBtn.disabled = false;

		startBtn.addEventListener('click', timer);

		function timer () {
			intervalId = setInterval( () => {
         startBtn.disabled = true;
			const deltaTime = selectedDates[0] - new Date();
			const timeComponents = convertMs(deltaTime);
			updateClockFace(timeComponents);
	
			if (deltaTime < 1000) {
				clearInterval(intervalId);
			 }}, 1000);
			};
		  }
	}
		};

flatpickr(dateChosen, options);

function updateClockFace ({ days:daysValue, hours:hoursValue, minutes:minutesValue, seconds:secondsValue }) {
day.textContent = `${daysValue}`;
hours.textContent = `${hoursValue}`;
minutes.textContent = `${minutesValue}`;
seconds.textContent = `${secondsValue}`;
};

function addLeadingZero(value) {
	return String(value).padStart(2, '0');
};

 function convertMs(ms) {
	// Number of milliseconds per unit of time
	const second = 1000;
	const minute = second * 60;
	const hour = minute * 60;
	const day = hour * 24;
 
	// Remaining days
	const days = addLeadingZero(Math.floor(ms / day));
	// Remaining hours
	const hours = addLeadingZero(Math.floor((ms % day) / hour));
	// Remaining minutes
	const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
	// Remaining seconds
	const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
 
	return { days, hours, minutes, seconds };
 };

