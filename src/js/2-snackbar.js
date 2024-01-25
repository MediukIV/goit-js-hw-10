// Підключаємо бібліотеку iziToast
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

// Отримуємо форму за ідентифікатором
const form = document.querySelector('.form');

// Додаємо обробник події submit для форми
form.addEventListener('submit', evt => {
  evt.preventDefault();

  // Отримуємо значення затримки та стану з форми
  const delay = form.delay.value;
  const state = form.state.value;

  // Обробляємо виконання промісу
  makePromise({ value: delay, delay: delay, state: state })
    .then(value =>
      iziToast.show({
        title: '✅ OK',
        titleColor: '#FFFFFF',
        position: 'topRight',
        message:  `Fulfilled promise in ${delay}ms`,
        messageColor: '#fff',
        messageSize: '16px',
        backgroundColor: '#59A10D',
        close: false,
        closeOnClick: true,
      })
    )
    .catch(error =>
      iziToast.error({
        title: 'Error',
        titleColor: '#FFFFFF',
        position: 'topRight',
        message: `Rejected promise in ${delay}ms`,
        messageColor: '#fff',
        messageSize: '16px',
        backgroundColor: '#EF4040',
        close: false,
        closeOnClick: true,
      })
    );
  form.reset();
});

// Створюємо проміс з вказаною затримкою та обраним станом
const makePromise = ({ value, delay, state }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(value);
      } else {
        reject(value);
      }
    }, delay);
  });
};