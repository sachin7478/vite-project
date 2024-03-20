
const changeText = (e) =>{
    console.log(e)
}
function myDebounce (fn, t) {
    let timer;
    let context = this;
    return ((...arg) => {
        clearTimeout(timer);
        timer = setTimeout(() =>{
            fn.apply(context, context)
        }, t)
    })()
}