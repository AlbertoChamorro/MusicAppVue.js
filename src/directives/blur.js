import UIHelper from '@/utils/ui-helper'
const blur = {}

blur.install = function (Vue) {
  Vue.directive('blur', {
    bind (el, binding) {
      UIHelper.setBlur(el, binding)
    }
  })
}

export default blur
