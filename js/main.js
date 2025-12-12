function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
}
const obj = document.querySelector(".count-first");
const obj2 = document.querySelector(".count-second");
const obj3 = document.querySelector(".count-third");
const obj4 = document.querySelector(".count-four");



document.querySelector(".pro-section").addEventListener("mouseenter", function(evt){
    animateValue(obj, 0, 10, 500);
    animateValue(obj2, 0, 23, 500);
    animateValue(obj3, 0, 96, 500);
    animateValue(obj4, 0, 7, 500);
})




let elDropItem = document.querySelector(".dropdown__content")
let elHideWrapper = document.querySelector(".dropdown__hide-wrapper")
let elDropPlus = document.querySelector(".dropdown__plus")


let elDropItem2 = document.querySelector(".dropdown__content2")
let elHideWrapper2 = document.querySelector(".dropdown__hide-wrapper2")
let elDropPlus2 = document.querySelector(".dropdown__plus2")

let elDropItem3 = document.querySelector(".dropdown__content3")
let elHideWrapper3 = document.querySelector(".dropdown__hide-wrapper3")
let elDropPlus3 = document.querySelector(".dropdown__plus3")

let elDropItem4 = document.querySelector(".dropdown__content4")
let elHideWrapper4 = document.querySelector(".dropdown__hide-wrapper4")
let elDropPlus4 = document.querySelector(".dropdown__plus4")

elDropItem.addEventListener("click", function(){
  elHideWrapper.classList.toggle("open")
  elDropPlus.classList.toggle("minus")
})
elDropItem2.addEventListener("click", function(){
  elHideWrapper2.classList.toggle("open")
  elDropPlus2.classList.toggle("minus")
})
elDropItem3.addEventListener("click", function(){
  elHideWrapper3.classList.toggle("open")
  elDropPlus3.classList.toggle("minus")
})
elDropItem4.addEventListener("click", function(){
  elHideWrapper4.classList.toggle("open")
  elDropPlus4.classList.toggle("minus")
})
