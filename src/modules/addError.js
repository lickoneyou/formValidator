function addError(el) {
  el.style.borderBottom = '2px solid red'
  const elem = el.children[0].name
  return [elem, false]
}

export default addError
