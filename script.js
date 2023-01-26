var nav = document.querySelector("nav");
var valikko = document.querySelector("#valikko");
var main = document.querySelector("main");

valikko.addEventListener("click", toggleMenu);

function toggleMenu(){    
    nav.classList.toggle("hideElement");
    main.classList.toggle("hideElement");
}