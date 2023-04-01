function once(fn) {
  let active = false;
  return function (...args) {
    if (!active) {
      active = true;
      return fn.apply(this, args);
    }
    return;
  };
}

function fn() {
  console.log("被调用");
  return "12";
}

let onceFn = once(fn);

onceFn();
onceFn();
