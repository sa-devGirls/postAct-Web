function showLoading(){
    const div = document.createElement('div')
    div.classList.add('loading', 'centralize')

    const ul = document.createElement('ul')
    const li = document.createElement('li')
    const li2 = document.createElement('li')
    li.classList.add('load')
    li2.classList.add('load')

    const label = document.createElement('label')
    label.innerText = "Carregando..."

    const img = document.createElement('img')
    img.src = "../img/loading.gif"
    img.classList.add('gif')

    div.appendChild(ul)
    ul.appendChild(li)
    ul.appendChild(li2)
    li.appendChild(label)
    li2.appendChild(img)
    document.body.appendChild(div)

}

function hideLoading(){
    const loadings = document.getElementsByClassName('loading')

    if (loadings.length){
        loadings[0].remove()
    }
}