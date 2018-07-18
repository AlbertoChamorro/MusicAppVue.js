import Helper from '@/utils/helper'
const msToMm = {}

msToMm.install = Vue => {
  Vue.filter('ms-to-mm', val => {
    return Helper.convertMsToMm(val)
  })
}

export default msToMm
