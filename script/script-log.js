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


// const url = "index.html"
// const btn = document.getElementById('btn')

// function openPag(url) {
//     const novaJanela = window.open(url, '_self') //ou _blank para abrir em outra janela
//     novaJanela.focus()
// }

// btn.addEventListener('click', () =>{
//     openPag(url)
// })


function validateFields(){
    const emailValid = isEmailValid()
    document.getElementById('btn').disabled = !emailValid
}


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
    const email = document.getElementById('email').value

    if(!email){
        console.log('campo vazio')
        return true
    }else if(!emailRegex.test(campos[1].value)){
        setEror(1)
        return true  
    }else{
        removeError(1)
        return false 
    }
}

function mainPasswordValidate(){
    if(campos[2].value.length < 8){
        setEror(2)
    }else{
        removeError(2)
    }
}


// function register(){
//     window.location.href = "index.html"
// }


// function login(){
//     window.location.href = "index.html"
// }