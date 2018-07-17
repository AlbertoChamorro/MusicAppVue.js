<template lang="pug">
    .container
        .columns
            .column.is-6.is-offset-3
                 app-track(:track="track", v-if="track && track.album")
</template>
<script>
    import AppTrack from '@/components/tracks/Track'
    import trackService from '@/services/track-service'
    export default {
      components: { AppTrack },
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
