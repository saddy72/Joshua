window.onload = () => {
    const transition_div = document.querySelector('.transition');
    setTimeout( () => {
transition_div.classList.remove('is-active')
    }, 100);}

function Navbarclickindex() {
    const transition_div = document.querySelector('.transition');
    transition_div.classList.add('is-active')
    setTimeout( () => {
        window.location = "index.html"
    }, 300);
}

function Navbarclickcontact() {
    const transition_div = document.querySelector('.transition');
    transition_div.classList.add('is-active')
    setTimeout( () => {
        window.location = "../contact.html"
    }, 300);
}
function Navbarclickproxy() {
    const transition_div = document.querySelector('.transition');
    transition_div.classList.add('is-active')
    setTimeout( () => {
        window.location = "../proxy.html"
    }, 300);
}
function Navbarclickpolls() {
    const transition_div = document.querySelector('.transition');
    transition_div.classList.add('is-active')
    setTimeout( () => {
        window.location = "../polls.html"
    }, 300);
}
