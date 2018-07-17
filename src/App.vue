<template lang="pug">
  #app.has-background-white-ter

    app-header

    router-view
    
    app-footer

</template>

<script>
  import AppHeader from '@/components/layouts/Header.vue'
  import AppFooter from '@/components/layouts/Footer.vue'

  export default {
    name: 'app',
    components: { AppHeader, AppFooter }
  }
</script>

<style lang="scss">
    @import './sass/main';

</style>