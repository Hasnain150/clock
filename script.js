
// x.innerHTML=a
let one = () => {
  let a = new Date();
  let b = a.getHours();
  let bx = document.querySelector(".one");
  bx.innerHTML = b;
}
let two = () => {
  let a = new Date();
  let c = a.getMinutes();
  let cx = document.querySelector(".two");
  cx.innerHTML = c;
}
let three = () => {
  let a = new Date();
  let d = a.getSeconds();
  let dx = document.querySelector(".three");
 dx.innerHTML = d;
}
let four=()=>{
  let a = new Date();
let e = a.getDate();
let ex = document.querySelector(".four");
ex.innerHTML = e;
}
setInterval(one)
setInterval(two)
setInterval(four)

setInterval(three)
