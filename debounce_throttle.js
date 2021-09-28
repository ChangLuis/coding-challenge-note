
const debounce = (func, delay) => {
  let timeout;

  return () => {
    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(func, delay);
  }
};

const throttle = (func, timeout) => {
  let wait = false;

  return () => {
    if (!wait) {
      func.call();
      wait = true;

      setTimeout(() => {
        wait = false
      }, timeout)
    }
  }
};
