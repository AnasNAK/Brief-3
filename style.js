// menu Burgger
const burger = document.querySelector('.menu-icon')
const links = document.querySelector('.nav-links')
const close = document.querySelector('.close')

burger.addEventListener('click', function () {
    links.classList.add('show')
})

close.addEventListener('click', function () {
    links.classList.remove('show')
})





// select
let sushiClass = document.querySelector(".sushi");
let ramenClass = document.querySelector(".ramen");
let odenClass = document.querySelector(".oden");
let btnall = document.getElementById('all');
let btnSushi = document.getElementById('Sushi');
let btnRamen = document.getElementById('Ramen');
let btnOden = document.getElementById('Oden');

btnall.addEventListener('click', function () {
    sushiClass.style.display = "flex";
    ramenClass.style.display = "flex";
    odenClass.style.display = "flex";

});
btnSushi.addEventListener('click', function () {
    sushiClass.style.display = "flex";
    ramenClass.style.display = "none";
    odenClass.style.display = "none";

});
btnOden.addEventListener('click', function () {
    sushiClass.style.display = "none";
    ramenClass.style.display = "none";
    odenClass.style.display = "flex";

});
btnRamen.addEventListener('click', function () {
    sushiClass.style.display = "none";
    ramenClass.style.display = "flex";
    odenClass.style.display = "none";

});



//caart
let arrTotal = [];
var somme = 0;
let eventclickadd = document.querySelectorAll('.buy');
let parentcart = document.querySelector('.p-cart');

let idt = document.getElementById('idt');

eventclickadd.forEach(function (element) {
    element.addEventListener('click', function (e) {
        let obj = e.target.parentNode;
        console.log(obj.childNodes);
        let titreObj = obj.childNodes[1].innerText;
        let prixObj = obj.childNodes[3].innerText
        console.log(titreObj);
        console.log(prixObj);
        let total = document.getElementById('price');
        let div = document.createElement("div");
        div.innerHTML = `<div class ="ur-cart">
       <div class ="name-Obj">${titreObj}</div>
       <div class ="price-Obj">${prixObj}</div>
        </div>`;
        idt.appendChild(div);
        arrTotal.push(parseInt(prixObj));
        somme = arrTotal.reduce((p, c) => p + c, 0);
        total.innerHTML = somme;
    });

});
// // remove items from carte
// function removeCarteItem(event) {
//     var buttonClicked = event.target;
//     buttonClicked.parentElement.remove(".ur-cart");
// }

// function ready() {
//     // --- effacer les items de carte ---
//     var removeCarteButtons = document.getElementsByClassName("msa7");
//     for (var i = 0; i < removeCarteButtons.length; i++) {
//       var button = removeCarteButtons[i];
//       button.addEventListener("click", removeCarteItem);
//     }
// }
