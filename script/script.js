let darkmodeBtn = document.getElementById('darkmode');
let legibleBtn = document.getElementById('legible');
let cssBtn = document.getElementById('toggle-css');
let sassBtn = document.getElementById('toggle-sass');
let cssBtnMobile = document.getElementById('toggle-css-mobile');
let sassBtnMobile = document.getElementById('toggle-sass-mobile');
let styleCol = document.getElementById('style-col');

darkmodeBtn.addEventListener('click', function (e) {
    console.log('alooo')
    document.body.classList.toggle('dark')
})

legibleBtn.addEventListener('click', function (e) {
    document.body.classList.toggle('legible')
})

function implementSass() {
    styleCol.classList.add('sass')
    sassBtn.classList.add('active')
    cssBtn.classList.remove('active')
    sassBtnMobile.classList.add('active')
    cssBtnMobile.classList.remove('active')
}

function implementCss() {
    styleCol.classList.remove('sass')
    cssBtn.classList.add('active')
    sassBtn.classList.remove('active')
    cssBtnMobile.classList.add('active')
    sassBtnMobile.classList.remove('active')
}

cssBtn.addEventListener('click', implementCss)
sassBtn.addEventListener('click', implementSass)
cssBtnMobile.addEventListener('click', implementCss)
sassBtnMobile.addEventListener('click', implementSass)

// Detecta mudanças nas preferências do usuário
window.matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', event => {
        document.body.classList.toggle(event.matches ? "dark" : "light")
    });

// Aplica darkmode caso o usuário esteja usando o tema escuro no sistema
if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
) {
    document.body.classList.add('dark')
}