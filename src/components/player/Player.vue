<template lang="pug">
    .container(v-if="track && track.album")
        p.is-128x128
            img(:src="track.album.images[0].url")
        p
            strong {{ track.name }} 
            small ({{ track.duration_ms | ms-to-mm }})
        p.audio
            audio(controls, :src="track.preview_url")
</template>
<script>
    import { mapState } from 'vuex'
    export default {
      computed: {
        ...mapState(['track'])
      }
    }
</script>
<style lang="scss" scoped>
    $size: 184px;

    .audio {
        margin-bottom: 12px;
    }
    img {
        width: $size;
        height: $size;
        border-radius: 100px;
    }
</style>

