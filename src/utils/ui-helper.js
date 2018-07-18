function setBlur (el, binding, newNode, oldNode) {
  el.style.filter = !binding.value ? 'blur(1.5px)' : 'none'
  el.style.cursor = !binding.value ? 'not-allowed' : 'inherint'

  el.querySelectorAll('button').forEach(a => {
    if (!binding.value) {
      a.setAttribute('disabled', true)
    } else {
      a.removeAttribute('disabled')
    }
  })
}

export default {
  setBlur
}
