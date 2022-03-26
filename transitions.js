window.onload = () => {
    const transition_div = document.querySelector('.transition');
    setTimeout( () => {
transition_div.classList.remove('is-active')
    }, 500);}

function Navbarclickindex() {
    const transition_div = document.querySelector('.transition');
    transition_div.classList.add('is-active')
    setTimeout( () => {
        window.location = "index.html"
    }, 500);
}

function Navbarclickgames() {
    const transition_div = document.querySelector('.transition');
    transition_div.classList.add('is-active')
    setTimeout( () => {
        window.location = "games.html"
    }, 500);
}
