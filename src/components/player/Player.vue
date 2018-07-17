<template lang="pug">
    .container(v-if="track && track.album")
        p.is-128x128
            img(:src="track.album.images[0].url")
        p
            strong {{ track.name }} 
            span.has-text-black | 
            small {{ track.duration_ms }}
        p.audio
            audio(controls, :src="track.preview_url")
</template>
<script>
    export default {
      data () {
        return {
          track: {}
        }
      },
      created () {
        this.$bus.$on('play-music-handle', track => {
          this.track = track
        })
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

