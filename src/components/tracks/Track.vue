<template lang="pug">
    .card
        .card-image
            figure.image.is-1by1
                img.header-image(:src="track.album.images[0].url")
        .card-content
            .media
                .media-left
                    figure.image.is-48x48
                        img(:src="track.album.images[0].url")
                .media-content
                    p.title.is-6
                        strong {{ track.name }}
                    p.subtitle.is-6 {{ track.artists[0].name }}
            .content
                small.duration {{ track.duration_ms }}
                nav.level
                    .level-left
                        a.level-item.has-text-primary(@click="playMusic")
                            span.icon.is-small
                                i.fa.fa-caret-right.fa-2x                     

</template>
<script>
    export default {
      props: {
        track: { type: Object, required: true }
      },
      methods: {
        playMusic: function () {
          this.$emit('play-music', this.track.id)
        }
      }
    }
</script>
<style lang="scss" scoped>
    .card{
        cursor: pointer;
        border-radius: 10px;
        &:hover {
            background: hsl(0, 0%, 96%);
            border: 1px #3bd674 solid;
        }
        .header-image{
            border-radius: 10px 10px 0px 0px;
        }
    }
    .level{
        padding-top: 4px;
    }
</style>
