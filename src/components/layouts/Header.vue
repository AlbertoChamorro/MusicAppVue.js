<template lang="pug">
    section.hero.is-success
        .hero-head.space-hero
            header.nav
                .container
                    .nav-left
                        .nav-item
                            strong 🎵 to your track...                            
                    .nav-right.nav-menu
        .hero-body
            .container.has-text-centered
                h1.title App Music
                h2.subtitle Canciones que estan Vue-nisimas
                app-player
                               
</template>
<script>
    import AppPlayer from '@/components/player/Player.vue'
    export default {
      components: { AppPlayer }
    }
</script>

<style lang="scss" scoped>
    .space-hero {
        margin-top: 8px;
    }
</style>

