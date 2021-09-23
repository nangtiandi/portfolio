// click function for menu bar
let nav = document.querySelector('.nav');
let main = document.querySelector('.main');
let brand = document.querySelector('.brand');
let toggle = document.querySelector('.toggle');

toggle.onclick = function() {
    nav.classList.toggle('active');
    main.classList.toggle('active');
    brand.classList.toggle('active');
    toggle.classList.toggle('active');
}
// fix nav link issue for mobile
function toggleMenu() {
    let nav = document.querySelector('.nav');
    let main = document.querySelector('.main');
    nav.classList.remove('active');
    main.classList.remove('active');
}