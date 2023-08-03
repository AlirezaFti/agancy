items = document.querySelectorAll('#nav .list .item')

document.querySelectorAll('#nav .list .item .innerlist').forEach((element) => {
    element.classList.add('hidden')
})

items.forEach(element => {
    element.addEventListener('click', () => {
        element.querySelector('.innerlist').classList.toggle('hidden')
    })
});