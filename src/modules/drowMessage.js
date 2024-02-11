const parMessage = document.querySelector('.regMessage')
const form = document.querySelector('form').children

function drowMessage(status, msg = '', fields = {}) {
  if (status === 'error') {
    parMessage.style.color = 'red'
    parMessage.innerHTML = Object.values(fields).map(el => `<p>${el}</p>`).join(' ')
  } else {
    parMessage.style.color = 'green'
    parMessage.textContent = msg
    for (const elem of form) {
      elem.children[0].value = ''
    }
  }
}

export default drowMessage
