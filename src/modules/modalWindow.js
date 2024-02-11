const btn = document.querySelector('.modal_btn')
const modalWindowWrapper = document.querySelector('.modal_window_wrapper')
const modalWindow = document.querySelector('.modal_window')

const body = document.body

function toggleClass(e) {
  modalWindowWrapper.classList.toggle('active')
  body.classList.toggle('hidden')
}

btn.addEventListener('click', (e) => toggleClass(e))

modalWindowWrapper.addEventListener('click', (e) => toggleClass(e))

modalWindow.addEventListener('click', (e) => e.stopPropagation())
