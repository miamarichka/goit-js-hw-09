import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', onBtnSubmit);

function onBtnSubmit(event) {
  event.preventDefault();

  let delay = Number(event.currentTarget.delay.value);//make string to number and get values of inputs//
  let step = Number(event.currentTarget.step.value);
  let amount = Number(event.currentTarget.amount.value);

  for (let position = 1; position <= amount; position += 1) {//лічильник скільки разів потрібно буде викликати функцію//
    createPromise(position, delay)//виклик промісу//
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;//збільшуємо затримку на крок після кожного виклику//
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {//створення промісу//
    setTimeout(() => {//відкладений виклик//
      const shouldResolve = Math.random() > 0.3;//умова//
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);//мс затримки//
  });
}