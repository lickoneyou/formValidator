import addError from './addError'
import addValidate from './addValidate'
import postData from './postData'
import data from './data'

const form = document.querySelector('form')
const btn = document.querySelector('.btn_submit')
const parMessage = document.querySelector('.regMessage')

function validateName(el) {
  const input = el.children[0]
  return input.value.length <= 1 ? addError(el) : addValidate(el)
}

function validateEmail(el) {
  const re = /^\S+@\S+\.\S+$/
  const email = el.children[0].value
  return re.test(email) ? addValidate(el) : addError(el)
}

function validatePhone(el) {
  const phone = el.children[0].value.replace(/[^0-9]/g, '')
  return phone.length === 12 ? addValidate(el) : addError(el)
}

function validateAll() {
  validateName(form.children[0])
  validateEmail(form.children[1])
  validatePhone(form.children[2])
  validateName(form.children[3])
  return [
    validateName(form.children[0]),
    validateEmail(form.children[1]),
    validatePhone(form.children[2]),
    validateName(form.children[3]),
  ]
}

btn.addEventListener('click', () => {
  parMessage.textContent = ''
  postData('http://localhost:9090/api/registration', data(validateAll()))
})
