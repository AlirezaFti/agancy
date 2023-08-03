parts = document.querySelectorAll('.header .part')
previous = document.querySelector('.previous')
next = document.querySelector('.next')

previous.addEventListener('click', () => {
    activePart = document.querySelector('.header .part.show')
    tragetDataId = parseInt(activePart.getAttribute('data-id')) - 1
    if (tragetDataId < 1) {
        tragetDataId = parts.length
    } else if (tragetDataId > parts.length) {
        tragetDataId = 1
    }
    console.log(tragetDataId)
    targetPart = document.querySelector(`.header .part[data-id="${tragetDataId}"]`)

    activePart.classList.remove('show')
    targetPart.classList.add('show')
})

next.addEventListener('click', () => {
    activePart = document.querySelector('.header .part.show')
    tragetDataId = parseInt(activePart.getAttribute('data-id')) + 1
    if (tragetDataId < 1) {
        tragetDataId = parts.length
    } else if (tragetDataId > parts.length) {
        tragetDataId = 1
    }
    console.log(tragetDataId)
    targetPart = document.querySelector(`.header .part[data-id="${tragetDataId}"]`)

    activePart.classList.remove('show')
    targetPart.classList.add('show')
})