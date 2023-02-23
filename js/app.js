const body = document.querySelector('body');

const span = document.getElementsByClassName('span');


function moon(){
    body.classList.add('bodyDarkMode')
    document.getElementById('sun').classList.remove('sun')
    document.getElementById('moon').classList.add('sun')
    document.querySelector('nav').classList.add('navDark')
    document.querySelectorAll('h2')[0].classList.add('h2Dark')
    document.querySelectorAll('p')[0].classList.add('darkModeP')
    document.querySelectorAll('h1')[0].classList.add('darkModeh1')
    // !SPAN HABILITIES
    span.forEach(element => {
        span[element].classList.remove('span')
    });
}
function sun(){
    body.classList.remove('bodyDarkMode')
    document.getElementById('sun').classList.add('sun')
    document.getElementById('moon').classList.remove('sun')
    document.querySelector('nav').classList.remove('navDark')
    document.querySelectorAll('h2')[0].classList.remove('h2Dark')
    document.querySelectorAll('p')[0].classList.remove('darkModeP')
    document.querySelectorAll('h1')[0].classList.remove('darkModeh1')
}

console.log(span.length)