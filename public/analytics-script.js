
document.addEventListener('Beforeunload', () => {
    console.log('Сейчас мы исчезнем');
    const analytic = document.getElementById('analytics')
    analytic.classList.remove('active')
})

document.addEventListener('DOMContentLoaded', () => {
    const analytic = document.getElementById('analytics')
    analytic.classList.add('active')

    const workHow = document.querySelector('.button-work-how')
    flatpickr(".date-time-at", {
        enableTime: true,
        dateFormat: "d.m.Y, H:i",
        defaultDate: '07.10.2021, 10:55'
    })

    flatpickr(".date-time-now", {
        enableTime: true,
        dateFormat: "d.m.Y, H:i",
        defaultDate: '21.10.2021, 10:55'
    })


    workHow.addEventListener('click', () => {
        const dateTime = document.querySelector('.date-time')
        const timeChips = document.querySelector('.time-chips')
        const tableCard = document.querySelector('.table-card')
        const arrowUp = document.querySelector('.material-symbols-outlined')
        const arrowDown = document.querySelector('.button-work-how > img')

        if (dateTime.style.display !== 'none') {
            dateTime.style.display = 'none'
            timeChips.style.display = 'none'
            tableCard.classList.add('hidden')
            arrowDown.classList.add('hidden')
            arrowUp.classList.remove('hidden')
        } else {
            dateTime.style.display = 'flex'
            timeChips.style.display = 'flex'
            tableCard.classList.remove('hidden')
            arrowDown.classList.remove('hidden')
            arrowUp.classList.add('hidden')
        }
    })

})
let changeIconFavorite = (id) => {
    console.log(document.getElementById(id).src);
    if (document.getElementById(id).src.includes("like_red.png")){
        document.getElementById(id).src="../image/favorite_FILL0_wght400_GRAD0_opsz24.png"
    } else {
        document.getElementById(id).src="../image/like_red.png"
    }
}
