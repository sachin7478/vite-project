// ================== throttling ===============
let ncount = 0;
let tcount = 0;
var apiResponse = {};
let boolThrottle = true;
let selectNode = document.querySelector('#callApiDiv > #selUsers');
selectNode.style.display = 'none';
function tryThrottle() {
  const div = document.getElementById("throttle");
  div.querySelector("#n_count").innerHTML = ncount++;

  //Throttle
  (() => {
    if (boolThrottle) {
      div.querySelector("#t_count").innerHTML = tcount++;
      boolThrottle = false;
      setTimeout(() => {
        boolThrottle = true;
      }, 1000);
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
  console.log("yes");
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
      console.log("Fetching from cache", cache);
      return cache[strArgs];
    } else {
      const res = fn.apply(this, args);
      cache[strArgs] = res;
      console.log("Called the fn", cache);
      return res;
    }
  };
};

const addNumbers = (a, b, c) => a + b + c;
const factorial = (n) => {
  if (n === 0) {
    return 1;
  } else return n * factorial(n - 1);
};
const tryMemoize = () => {
  const add = memoize(addNumbers);
  console.log(add(1, 2, 3)); // called fun
  console.log(add(1, 2, 3)); // fetching {[1,2,3]: 6}
  console.log(add(1, 2, 4)); // called fn {[1,2,3]: 6, [1,2,4]: 7}
  const fact = memoize(factorial);
  console.log(fact(4)); // {[4]: 24}
  console.log(fact(5)); // {[4]: 24, [5]: 120}
};

// ================ End Memoization ============

// ================ Curry Closure ==============
function tryCurryClosure() {
  const myCurry = () => {
    let total = 0; // this variable formit closure for its unanimus function
    return (val) => {
      total = total + val;
      return total;
    };
  };
  const sum = myCurry();
  console.log(sum(1)); //1
  console.log(sum(3)); //4
  console.log(sum(4)); //8
  console.log(sum(5)); //13
  console.log(sum(6)); //19
}
// ================ end Curry Closure ==============

// let str = "Hello good morning";
// let ss = new Set([1,2,3])
// let r = new RegExp( `[aeiou]/i`)
// console.log(r.test('sachin'))
// const split = (str) => {
//   console.log(Array.from(str));
//   console.log(Array.from(ss));
// }
// split(str);

// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr.splice(3, 1), arr);

// ===== Promise ======================
const tryPromise = (action) => {
  let para = document.querySelector("#promiseDiv > #resPromise");

  console.log();
  para.innerHTML = "";
  // Promise creation
  const myPromise = new Promise((resolve, reject) => {
    const t = 1500;
    if (action === "resolve") {
      setTimeout(() => resolve("Promise Resolved"), t);
    } else if (action === "reject") {
      setTimeout(() => {
        reject(new Error("Oops - Some Error"));
      }, t);
    }
  });

  const span = document.createElement("span");
  myPromise
    .then((data) => {
      // Resolve state block will run before finally block
      console.log("Resolved");
      span.className = "text-green-400 text-bold";
      span.textContent = data;
      para.appendChild(span);
    })
    .catch((err) => {
      // this will run after finally block
      console.log("Rejected");
      span.className = "text-red-500 text-bold";
      span.textContent = "Please watch console";
      para.appendChild(span);
      throw err;
    })
    .finally(() => {
      // finaly block will run before catch/reject/throw
      // finaly block will run After resolve state
      console.log("Finally");
    });
};
// ====End Promise ====================

// ===== Git Api ========================
const tryGitApi = () => {
  selectNode.textContent = '';
  async function getData() {
    await fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => {
        data = data.splice(0,5)
        apiResponse = data;
        loadData(apiResponse);
      })
      .catch((err) => {
        console.log("Error cought " + err);
      })
      .finally(() => {
        // console.log("finally");
      });
  }
  getData();
  function loadData(userData) {
    if(apiResponse.length) {
      apiResponse.forEach((item, index) => {
        let option = document.createElement('option');
        option.value = item.login;
        option.textContent = item.login;
        if(index === 0) {
          option.selected = true;
        }
        selectNode.appendChild(option);
      })
      selectNode.style.display = 'block';
    }
  }
};
// ===== Git Api ========================
