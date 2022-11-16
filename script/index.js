function logout(){
    firebase.auth().signOut().then(() => {
        window.location.href = "login_cadastro.html"
    }).catch(() => {
        alert("Erro ao fazer o logout")
    })
}


function deleteUser(){
    if (confirm('Voce tem certeza que deseja deletar sua conta?') == true){
        currentUser = firebase.auth().currentUser
        currentUser.delete().then(() => {
            alert('usuario deletado')
        })
    }
}