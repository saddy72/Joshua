window.onload = () => {
    const transition_div = document.querySelector('.transition');
    setTimeout( () => {
transition_div.classList.remove('is-active')
    }, 100);}

function Navbarclickindex() {
    const transition_div = document.querySelector('.transition');
    transition_div.classList.add('is-active')
    setTimeout( () => {
<<<<<<< HEAD
        window.location = "index.html"
    }, 300);
}

=======
        window.location = "../proxy.html"
    }, 300);
}

function Navbarclickgames() {
    const transition_div = document.querySelector('.transition');
    transition_div.classList.add('is-active')
    setTimeout( () => {
        window.location = "../games.html"
    }, 300);
}
>>>>>>> 3ab3cf152d35cbf55da5abbf95a86dc1b14bc6a8
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
<<<<<<< HEAD
        window.location = "proxy.html"
=======
        window.location = "../index.html"
>>>>>>> 3ab3cf152d35cbf55da5abbf95a86dc1b14bc6a8
    }, 300);
}
function Navbarclickpolls() {
    const transition_div = document.querySelector('.transition');
    transition_div.classList.add('is-active')
    setTimeout( () => {
        window.location = "../polls.html"
    }, 300);
}