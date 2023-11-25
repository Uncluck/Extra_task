
document.addEventListener('DOMContentLoaded', () => {
    console.log('Сейчас мы исчезнем');
    const main = document.getElementById('main')
    main.classList.add('active')
})

document.addEventListener('Beforeunload', () => {
    const main = document.getElementById('main')
    main.classList.remove('active')
})

let changeStatus = (parentHtml) => {

    const dropDown = parentHtml.querySelector('.dropdown-content')
    let free = parentHtml.firstElementChild
    let notFree = dropDown.firstElementChild
    dropDown.classList.add('open-content')

    let dataValue = notFree.getAttribute('data-state')
    let imgButton = document.createElement('img')

    switch (dataValue) {
        case '0':
            notFree.addEventListener('click', () => {
                notFree.setAttribute('data-state', '1')
                free.setAttribute('data-state', '0')
                free.innerText = 'Занят'
                notFree.innerText = 'Свободен'
                imgButton.src = '/image/arrow_drop_down_24px.png'
                free.appendChild(imgButton)
                free.style.width = '100px';
                free.style.display = 'flex';
                free.style.justifyContent = 'space-between';
                dropDown.classList.remove('open-content')
            })
            break
        case '1':
            notFree.addEventListener('click', () => {
                notFree.setAttribute('data-state', '0')
                free.setAttribute('data-state', '1')
                free.innerText = 'Свободен'
                notFree.innerText = 'Занят'
                imgButton.src = '/image/arrow_drop_down_24px.png'
                free.appendChild(imgButton)
                free.style.width = '100px';
                free.style.display = 'flex';
                free.style.justifyContent = 'space-between';
                dropDown.classList.remove('open-content')
            })
            break;
    }
}


let changeIcon = (id) => {
    if (document.getElementById(id).src.includes("share_on.png")){
        document.getElementById(id).src="../image/share_off.png"
        return;
    }
    if (document.getElementById(id).src.includes("share_mute.png")){
        document.getElementById(id).src="../image/share_on.png"
        return;
    }
    if (document.getElementById(id).src.includes("share_off.png")){
        document.getElementById(id).src="../image/share_mute.png"
    }
}