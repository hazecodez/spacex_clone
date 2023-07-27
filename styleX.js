const btn = document.getElementById('menu-btn')
const overlay = document.getElementById('overlay')
const menulists = document.getElementById('lists')

btn.addEventListener('click', navToggle)

function navToggle(){
    btn.classList.toggle('open')
    overlay.classList.toggle('overlay-show')
    document.body.classList.toggle('no-scroll')
    menulists.classList.toggle('show_lists')
}