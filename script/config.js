function deleteUser(){
    if (confirm('Você tem certeza que deseja deletar sua conta?') == true){
        currentUser = firebase.auth().currentUser
        currentUser.delete().then(() => {
            alert('Usuário deletado!')
        })
    }
}