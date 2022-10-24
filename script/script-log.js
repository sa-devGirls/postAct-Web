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


//validação de campos
function validateFields(){
    const emailValid = isEmailValid()
    const passwordValid = isPasswordValid()
    document.getElementById('btn2').disabled = !emailValid || !passwordValid
}

function isEmailValid(){
    const email = document.getElementById('email').value
    if (!email){
        return false
    }
    return validateEmail(email)
}

function isPasswordValid(){
    const password = document.getElementById('password').value
    if (!password){
        return false
    } else {
        return true
    }
}

function validateEmail(email){
    return /\S+@\S+\.\S+/.test(email)
}
