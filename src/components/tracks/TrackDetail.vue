<template lang="pug">
    .container
        .columns(v-if="track && track.album")
            .column.is-3.has-text-centered
                figure.media-left
                  p.image
                    img(:src="track.album.images[0].url")
                  p 
                    a.button.is-primary(@click="play") Rating
                      span.icon
            .column.is-9
              .panel
                .panel-heading
                  h1.title {{ track.name }}
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
    import trackService from '@/services/track-service'
    import trackMixin from '@/mixins/track'

    export default {
      mixins: [ trackMixin ],
      data () {
        return {
          track: {}
        }
      },
      methods: {
        detail: function (id) {
          trackService.detail(id)
            .then(res => {
              this.track = res
            })
        }
      },
      created () {
        const id = this.$route.params.id
        this.detail(id)
      }
    }
</script>
<style lang="scss" scoped>
    .columns {
        margin: 44px auto;
    }
</style>
