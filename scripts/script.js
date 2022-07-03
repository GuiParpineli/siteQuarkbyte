const navHidden = document.querySelector('.ul-visible');
const nav = document.querySelector('.ul-hidden');


navHidden.onclick = a => {
    navHidden.style.display = 'none';
    nav.style.display = 'block';
}
nav.onclick = a => {

    nav.style.display = 'none';
    navHidden.style.display = 'block';
}
