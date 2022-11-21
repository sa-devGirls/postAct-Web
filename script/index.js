function logout(){
    firebase.auth().signOut().then(() => {
        window.location.href = "login_cadastro.html"
    }).catch(() => {
        alert("Erro ao fazer o logout")
    })
}


let coments = document.getElementsByClassName('coments')

coments.addEventListener('click', function(){
    let comentContent = document.getElementsByClassName('comentContent')

    if(comentContent.style.display === 'block'){
        comentContent.style.display = 'none'
    }else{
        comentContent.style.display = 'block'
    }
})



let photo = document.getElementById('imgPhoto');
let file = document.getElementById('flImage');

photo.addEventListener('click', () => {
    file.click();
});