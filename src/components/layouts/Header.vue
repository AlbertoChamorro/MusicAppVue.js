<template lang="pug">
    section.hero.is-success
        .hero-head.space-hero
            header.navbar
                .container
                    .navbar-brand
                        a.has-text-black 
                            strong 🎵 
                            //- img(src="https://bulma.io/images/bulma-logo.png", width="112", height="28")
                    .navbar-menu
                        .navbar-start
                            router-link.navbar-item(:to="{name: 'search'}") Búscar
                            router-link.navbar-item(to="about") Nosotros
                        .navbar-end
                            .navbar-item
                                a.has-text-white
                                    i.fa.fa-ellipsis-v.fa-2x
                            
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

