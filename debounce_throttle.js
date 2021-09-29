
const debounce = (func, delay) => {
  let timeout;

  return function(...args) {
    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(() => func.apply(this, args), delay);
  }
};

const throttle = (func, timeout) => {
  let wait = false;

  return function(...args) {
    if (!wait) {
      wait = true;

      setTimeout(() => {
        wait = false
      }, timeout)

      return func.apply(this, args);
    }
  }
};
