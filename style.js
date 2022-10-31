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
let makiClass = document.querySelector(".sushi");
let nigiriClass = document.querySelector(".ramen");
let soupeClass = document.querySelector(".oden");
let btnTous = document.getElementById('all');
let btnMaki  = document.getElementById('Sushi');
let btnNigiri = document.getElementById('Ramen');
let btnSoupe = document.getElementById('Oden');

btnTous.addEventListener('click',function(){
    makiClass.style.display="flex";
    nigiriClass.style.display="flex";
    soupeClass.style.display="flex";

});
btnMaki.addEventListener('click',function(){
    makiClass.style.display="flex";
    nigiriClass.style.display="none";
    soupeClass.style.display="none";

});
btnSoupe.addEventListener('click',function(){
    makiClass.style.display="none";
    nigiriClass.style.display="none";
    soupeClass.style.display="flex";

});
btnNigiri.addEventListener('click',function(){
    makiClass.style.display="none";
    nigiriClass.style.display="flex";
    soupeClass.style.display="none";

});