const url = "index.html"
const btn = document.getElementById('btn')
const btn2 = document.getElementById('btn2')

function openPag(url) {
    const novaJanela = window.open(url, '_self') //ou _blank para abrir em outra janela
    novaJanela.focus()
}

btn.addEventListener('click', () =>{
    openPag(url)
})

btn2.addEventListener('click', () =>{
    openPag(url)
})


const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

