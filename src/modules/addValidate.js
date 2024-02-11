function addValidate(el) {
  el.style.borderBottom = '2px solid green'
  const elem = el.children[0].name
  return [elem, el.children[0].value]
}

export default addValidate
