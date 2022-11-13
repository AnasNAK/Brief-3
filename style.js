// menu Burgger
const burger = document.querySelector('.menu-icon')
const links = document.querySelector('.nav-links')
const close = document.querySelector('.close')

burger.addEventListener('click' , function (){
    links.classList.add('show')
})

close.addEventListener('click' , function(){
    links.classList.remove('show')
})





// select
let sushiClass = document.querySelector(".sushi");
let ramenClass = document.querySelector(".ramen");
let odenClass = document.querySelector(".oden");
let btnall = document.getElementById('all');
let btnSushi  = document.getElementById('Sushi');
let btnRamen = document.getElementById('Ramen');
let btnOden = document.getElementById('Oden');

btnall.addEventListener('click',function(){
    sushiClass.style.display="flex";
    ramenClass.style.display="flex";
    odenClass.style.display="flex";

});
btnSushi.addEventListener('click',function(){
    sushiClass.style.display="flex";
    ramenClass.style.display="none";
    odenClass.style.display="none";

});
btnOden.addEventListener('click',function(){
    sushiClass.style.display="none";
    ramenClass.style.display="none";
    odenClass.style.display="flex";

});
btnRamen.addEventListener('click',function(){
    sushiClass.style.display="none";
    ramenClass.style.display="flex";
    odenClass.style.display="none";

});



//caart
let arrTotal = [];
var somme = 0 ;
let eventclickadd = document.querySelectorAll('.buy');
let parentcart = document.querySelectorAll('.p-cart');





