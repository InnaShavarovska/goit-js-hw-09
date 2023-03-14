import Notiflix from 'notiflix';

const form = document.querySelector('.form');

const firstDelay = document.querySelector('[name="delay"]');
const delayStep = document.querySelector('[name="step"]');
const amount = document.querySelector('[name="amount"]');

form.addEventListener('submit', onFormSubmit);


function onFormSubmit (event) {
    event.preventDefault();

let delayVal = firstDelay.value;
let stepVal= delayStep.value;
let amountVal = amount.value;


for (let i = 1; i <= amountVal; i += 1) {
createPromise(i, delayVal);
 delayVal += stepVal;
};
};


function createPromise(position, delay) {

return  promise = new Promise((resolve, reject) => {

      setTimeout( () => {

      const shouldResolve = Math.random() > 0.3;

        if (shouldResolve) {
          resolve({ position, delay });
        } else {
         reject({ position, delay });
        }
      }, delay);
    });
  };

promise.then(({ position, delay }) => {
  Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  }).catch(({ position, delay }) => {
    Notiflix.Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`);
  });