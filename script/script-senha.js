const url = "redefinir-senha.html"
const btn = document.getElementById('btn')

function openPag(url) {
    const novaJanela = window.open(url, '_self')
    novaJanela.focus()
}

btn.addEventListener('click', () =>{
    openPag(url)
})

