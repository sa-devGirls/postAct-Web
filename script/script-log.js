// const url = "index.html"
// const btn2 = document.getElementById('btn2')

// function openPag(url) {
//     const novaJanela = window.open(url, '_self') //ou _blank para abrir em outra janela
//     novaJanela.focus()
// }

// btn.addEventListener('click', () =>{
//     openPag(url)
// })

// btn2.addEventListener('click', () =>{
//     openPag(url)
// })


const signUpButton = document.getElementById('signUp')
const signInButton = document.getElementById('signIn')
const container = document.getElementById('container')

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active")
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active")
});



const form = document.getElementById('form')
const campos = document.querySelectorAll('.required')
const spans = document.querySelectorAll('.span-required')
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

const btn = document.getElementById('btn')

btn.addEventListener('click', (event) =>{
    event.preventDefault()
    nameValidate()
    emailValidate()
    mainPasswordValidate()
})

function setEror(login_cadastro){
    campos[login_cadastro].style.border = '2px solid #e63636'
    spans[login_cadastro].style.display = 'block'
}

function removeError(login_cadastro){
    campos[login_cadastro].style.border = ''
    spans[login_cadastro].style.display = 'none'
}

function nameValidate(){
    if(campos[0].value.length < 3){
        setEror(0)
    }else{
        removeError(0)
    }
}

function emailValidate(){
        if(!emailRegex.test(campos[1].value)){
            setEror(1)
        }else{
            removeError(1)
        }
}

function mainPasswordValidate(){
    if(campos[2].value.length < 8){
        setEror(2)
    }else{
        removeError(2)
    }
}