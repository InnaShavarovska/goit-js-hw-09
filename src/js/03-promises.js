import Notiflix from 'notiflix';

const form = document.querySelector('.form');

const firstDelay = document.querySelector('[name="delay"]');
const delayStep = document.querySelector('[name="step"]');
const amount = document.querySelector('[name="amount"]');

form.addEventListener('submit', onFormSubmit);


function onFormSubmit (event) {
    event.preventDefault();

let delayVal = firstDelay.valueAsNumber;
let stepVal= delayStep.valueAsNumber;
let amountVal = amount.valueAsNumber;


for (let i = 1; i <= amountVal; i += 1) {
createPromise(i, delayVal).then(({ position, delay }) => {
  Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  }).catch(({ position, delay }) => {
    Notiflix.Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`);
  });
 delayVal += stepVal;
};
};


function createPromise(position, delay) {

return new Promise((resolve, reject) => {

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

  
