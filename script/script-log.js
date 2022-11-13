const signUpButton = document.getElementById('signUp')
const signInButton = document.getElementById('signIn')
const container = document.getElementById('container')

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active")
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active")
});

const campos = document.querySelectorAll('.required')
const spans = document.querySelectorAll('.span-required')
const spansNull = document.querySelectorAll('.spans-null')
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

function register(){
    if(userValidate() && emailValidate() && mainPasswordValidate()){
        window.location.href = "index.html"
    }
}

btn.addEventListener('click', (event) =>{
    event.preventDefault()
    userValidate()
    emailValidate()
    mainPasswordValidate()
})

function nullField(login_cadastro){
    campos[login_cadastro].style.border = '2px solid #e63636'
    spansNull[login_cadastro].style.display = 'block'
    spans[login_cadastro].style.display = 'none'
}

function setEror(login_cadastro){
    campos[login_cadastro].style.border = '2px solid #e63636'
    spans[login_cadastro].style.display = 'block'
    spansNull[login_cadastro].style.display = 'none'
}

function removeError(login_cadastro){
    campos[login_cadastro].style.border = ''
    spans[login_cadastro].style.display = 'none'
}

function userValidate(){
    const user = forms.user().value

    if(!user){
        nullField(0)
        return false
    }else if(campos[0].value.length < 3){
        setEror(0)
        return false
    }else{
        removeError(0)
        return true
    }
}

function emailValidate(){
    const email = forms.email().value

    if(!email){
        nullField(1)
        return false
    }else if(!emailRegex.test(campos[1].value)){
        setEror(1)
        return false 
    }else{
        removeError(1)
        return true 
    }
}

function mainPasswordValidate(){
    const password = forms.password().value

    if(!password){
        nullField(2)
        return false
    }else if(campos[2].value.length < 8){
        setEror(2)
        return false
    }else{
        removeError(2)
        return true
    }
}


const forms = {
    user: () => document.getElementById('user'),
    email: () => document.getElementById('email'),
    password: () => document.getElementById('password'),
}