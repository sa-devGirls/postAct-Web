function logout(){
    firebase.auth().signOut().then(() => {
        window.location.href = "login_cadastro.html"
    }).catch(() => {
        alert("Erro ao fazer o logout")
    })
}