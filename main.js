// throttling
let ncount = 0;
let tcount = 0;
let boolThrottle = true;
function tryThrottle() {
  const div = document.getElementById("throttle");
  div.querySelector('#n_count').innerHTML = ncount++;
  
  //Throttle
  (()=>{
    if(boolThrottle) {
      div.querySelector('#t_count').innerHTML = tcount++;
      boolThrottle = false;
      setTimeout(()=>{
        boolThrottle = true;
      },1000)
    }
  })();

}
// throttling
// Debouncing
function myDebounce(fun, t=1000) {
  const div = document.getElementById("debouce");
  const input = div.querySelector("#txt_debounce").value;
  div.querySelector("#normalText").innerHTML = input;
  console.log(fun)
  let timer;
  return ((...args) => {
    
    clearTimeout(timer);
    timer = setTimeout(() => {
      if (!timer) {
        fun.apply(this, args);
      }
      timer = undefined;
    }, t);
  })();

}
const processText = (e) => {
  console.log(e)

}
// Debouncing