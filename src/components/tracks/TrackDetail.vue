<template lang="pug">
    .container
        .columns(v-if="track && track.album")
            .column.is-3.has-text-centered
                figure.media-left
                  p.image
                    img(:src="track.album.images[0].url")
                  p.button-bar
                    a.button.is-primary(@click="play")
                      span.icon
                        i.fa.fa-play
            .column.is-9
              .panel
                .panel-heading
                  h1.title {{ trackTitle }}
                .panel-block
                  article.media
                    .media-content
                      .content
                        ul(v-for="(value, key) in track")
                          li
                            strong {{ key }}:&nbsp;
                            span {{ value }}
                      nav.level
                        .level-left
                          a.level-item

</template>
<script>
    import { mapState, mapActions, mapGetters } from 'vuex'
    import trackMixin from '@/mixins/track'

    export default {
      mixins: [ trackMixin ],
      methods: {
        ...mapActions(['getTrackById'])
      },
      computed: {
        ...mapState(['track']),
        ...mapGetters(['trackTitle'])
      },
      created () {
        const id = this.$route.params.id
        if (!this.track || !this.track.id || this.track.id !== id) {
          this.getTrackById({ id })
            .then(() => {
              console.log('finish loader track to api')
            })
        }
      }
    }
</script>
<style lang="scss" scoped>
    .columns {
        margin: 44px auto;
    }
    .button-bar {
      margin-top: 20px; 
    }
</style>
