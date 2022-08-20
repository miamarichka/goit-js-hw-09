// import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', onBtnSubmit);

function onBtnSubmit(event){
  event.preventDefault();

let delay = event.currentTarget.delay.value;
let step = event.currentTarget.step.value;
let amount = event.currentTarget.step.value;

  for (let position = 1; position <= amount; position += 1) {

    createPromise(position, delay)

      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })

      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;
  }
}


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
