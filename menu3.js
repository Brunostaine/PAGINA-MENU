const botao = document.getElementById("botao")

function toogleMenu () {
    const nav = document.getElementById("nav")
    nav.classList.toogle("active")
}

botao.addEventListener("click", toogleMenu)