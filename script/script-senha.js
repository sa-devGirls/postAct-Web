const campos = document.getElementsByClassName('required')
const spans = document.getElementsByClassName('span-required')

function recoverPassword(){
    showLoading()
    firebase.auth().sendPasswordResetEmail(forms.emailRecover().value).then(() => {
        hideLoading()
        alert('Email Enviado')
    }).catch(error => {
        hideLoading()
        setEror(0)
        console.log(error)
    })
}


function setEror(recuperar_senha){
    campos[recuperar_senha].style.border = '2px solid #e63636'
    spans[recuperar_senha].style.display = 'block'
}

function removeError(recuperar_senha){
    campos[recuperar_senha].style.border = ''
    spans[recuperar_senha].style.display = 'none'
}

const forms = {
    emailRecover: () => document.getElementById('emailRecover')
}
