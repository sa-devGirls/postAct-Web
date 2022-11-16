function logout(){
    firebase.auth().signOut().then(() => {
        window.location.href = "login_cadastro.html"
    }).catch(() => {
        alert("Erro ao fazer o logout")
    })
}


function deleteUser(){
    if (confirm('Você tem certeza que deseja deletar sua conta?') == true){
        currentUser = firebase.auth().currentUser
        currentUser.delete().then(() => {
            alert('usuario deletado')
        })
    }
}

let photo = document.getElementById('imgPhoto');
let file = document.getElementById('flImage');

photo.addEventListener('click', () => {
    file.click();
});