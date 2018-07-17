const msToMm = {}

function convertMsToMm (ms) {
  console.log('ms ', ms)
  const min = Math.floor(ms / 60000)
  console.log('min ', min)
  const sec = (ms % 60000 / 1000).toFixed(0)
  console.log('sec ', sec)

  return `${min}:${sec}`
}

msToMm.install = Vue => {
  Vue.filter('ms-to-mm', val => {
    return convertMsToMm(val)
  })
}

export default msToMm
