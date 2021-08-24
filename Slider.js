
const slider = document.querySelector('#slider');
let sliderSection= document.querySelectorAll('.slider_section');
let sliderSectionLast= sliderSection[sliderSection.length -1];

const BtnLeft = document.querySelector('#btn_left');
const BtnRight = document.querySelector('#btn_right');
slider.insertAdjacentElement('afterbegin',sliderSectionLast);
 
function next(){
    let sliderSectionFirst= document.querySelectorAll(".slider_section")[0];
  slider.style.marginLeft="-200%";
  slider.style.transition="all 0.5s";
  setTimeout(function(){
      slider.style.transition="none";
      slider.insertAdjacentElement('beforeend',sliderSectionFirst);
      slider.style.marginLeft="-100%";


  },500);   
    
}
function Prev(){
    let sliderSection   = document.querySelectorAll(".slider_section");
    let sliderSectionLast= sliderSection[sliderSection.length -1];
  slider.style.marginLeft="0";
  slider.style.transition="all 0.5s";
  setTimeout(function(){
      slider.style.transition="none";
      slider.insertAdjacentElement('afterbegin',sliderSectionLast);
      slider.style.marginLeft="-100%";


  },500);   
    
}
BtnRight.addEventListener('click',function(){
    next();
});
BtnLeft.addEventListener('click',function(){
    Prev();
});
setInterval(function(){
    next();
},5000);