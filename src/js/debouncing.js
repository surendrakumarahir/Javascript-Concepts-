const getData = () => {
  console.log("this working")
}

const debounce = function(fn, delay) {
  let timer;
  return function() {
    let context = this,
    arg= arguments;
    clearTimeout(timer);
   timer = setTimeout(() => {
      fn.apply(context, arguments)
     }, delay)
  }
}
const extramethod = debounce(getData, 500);



