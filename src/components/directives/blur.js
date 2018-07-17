const blur = {}

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

blur.install = function (Vue) {
  Vue.directive('blur', {
    bind (el, binding) {
      setBlur(el, binding)
    }
  })
}

export default blur
