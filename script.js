var menuElem = document.getElementById('top_menu');
var container = document.getElementById('container');
var footer = document.getElementById('foot');
var titleElem = document.getElementById('burger');

titleElem.onclick = function() {
    menuElem.classList.toggle('open');
    container.classList.toggle('close');
    footer.classList.toggle('close');
    titleElem.classList.toggle('open')
};