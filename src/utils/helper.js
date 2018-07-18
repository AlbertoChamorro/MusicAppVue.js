function convertMsToMm (ms) {
  // seg = (ms / 1000 segundos) / 60 min
  const min = Math.floor(ms / 60000)
  const sec = (ms % 60000 / 1000).toFixed(0)

  return `${min}:${sec}`
}

export default {
  convertMsToMm
}
