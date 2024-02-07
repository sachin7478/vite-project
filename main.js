// ================== throttling ===============
let ncount = 0;
let tcount = 0;
let boolThrottle = true;
function tryThrottle() {
  const div = document.getElementById("throttle");
  div.querySelector('#n_count').innerHTML = ncount++;

  //Throttle
  (() => {
    if (boolThrottle) {
      div.querySelector('#t_count').innerHTML = tcount++;
      boolThrottle = false;
      setTimeout(() => {
        boolThrottle = true;
      }, 1000)
    }
  })();

}
// ============= end throttling ===================

// ============== Debouncing ===================
function myDebounce(fun, t = 1000) {
  const div = document.getElementById("debouce");
  const input = div.querySelector("#txt_debounce").value;
  div.querySelector("#normalText").innerHTML = input;
  let timer;
  return (() => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fun.call(this);
    }, t);
  })();

}
function printDebouncedText() {
  console.log('yes')
  const div = document.getElementById("debouce");
  const input = div.querySelector("#txt_debounce").value;
  div.querySelector("#debounceText").innerHTML = input;
}
// ============= end Debouncing ===============

// ================ Memoization ==============
const memoize = (fn) => {
  let cache = {};
  return (...args) => {
    const strArgs = JSON.stringify(args);
    if (cache[strArgs]) {
      console.log('Fetching from cache', cache);
      return cache[strArgs];
    } else {
      const res = fn.apply(this, args);
      cache[strArgs] = res;
      console.log('Called the fn', cache);
      return res;
    }
  }
}


const addNumbers = (a, b, c) => a + b + c;
const factorial = (n) => {
  if (n === 0) { return 1 }
  else return n * factorial(n - 1)
}
const tryMemoize = () => {
  const add = memoize(addNumbers);
  console.log(add(1, 2, 3)) // called fun
  console.log(add(1, 2, 3)) // fetching {[1,2,3]: 6}
  console.log(add(1, 2, 4)) // called fn {[1,2,3]: 6, [1,2,4]: 7}
  const fact = memoize(factorial);
  console.log(fact(4))  // {[4]: 24}
  console.log(fact(5))  // {[4]: 24, [5]: 120}
}

// ================ End Memoization ============
