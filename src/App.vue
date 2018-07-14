<template lang="pug">
  #app
    h1 {{ msg }}
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Hello World!'
    }
  }
}
</script>

<style lang="scss">
  @import './sass/main';
</style>