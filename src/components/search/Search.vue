<template lang="pug">

  main.has-background-white-ter

    app-notification(:is-error="isError" v-show="notify")
      p(slot="message") 
        span(v-if="!isError") {{ searchResults }}
        span(v-else) No se encontraron resultados.

    section.section
      nav.nav.has-shadow
        .container
            .columns.is-centered
              .column
                  .field.has-addons
                    .control.is-expanded
                        input.input.is-medium(
                          type="text", 
                          placeholder="Search music...", 
                          v-model="searchText"
                          @keyup.enter="search"
                        )
                    .control
                      a.button.is-primary.is-medium(@click="search") 
                        i.fa.fa-search
                    .control
                      a.button.is-danger.is-medium(@click="clearSearch")
                        i.fa.fa-times  
                        //-  &times; fa.fa-ban

      .container
        .columns.is-centered
          .column 
              p.searchResults.has-text-dark.is-pulled-left {{ searchResults }}  

      app-loader(v-show="isLoading")

      .container.containerMusic
        .columns.is-multiline
          .column.is-one-quarter(v-for="track in tracks") 
            app-track(
                v-blur="track.preview_url"
                :class="{ 'isPlayMusic': track.id === selectedTrackId }"
                :track="track" 
                @play-music="playMusic"
            )

</template>

<script>
  import trackService from '@/services/track-service'
  import AppTrack from '@/components/tracks/Track.vue'
  import AppLoader from '@/components/shared/Loader.vue'
  import AppNotification from '@/components/shared/Notification.vue'

  export default {
    name: 'search',
    components: { AppTrack, AppLoader, AppNotification },
    data () {
      return {
        searchText: '',
        tracks: [],
        selectedTrackId: null,
        isLoading: false,
        isError: false,
        notify: false
      }
    },
    methods: {
      search: function () {
        if (!this.searchText) {
          this.clearSearch()
          return
        }
        this.tracks = []
        this.isLoading = true
        trackService.getAll(this.searchText)
          .then(res => {
            // https://api.spotify.com/v1/search?query=the+be&type=track&offset=0&limit=20
            this.isLoading = false
            this.isError = res.tracks.total === 0
            this.notify = true
            this.tracks = res.tracks.items
          })
      },
      clearSearch: function () {
        this.searchText = ''
        this.tracks = []
      },
      playMusic: function (id) {
        console.log(`playing music ${id}`)
        this.selectedTrackId = id
      }
    },
    watch: {
      notify () {
        if (this.notify) {
          setTimeout(() => {
            this.notify = false
          }, 2500)
        }
      }
    },
    computed: {
      searchResults () {
        return `Se encontraron ${this.tracks.length} registros de canciones.`
      }
    },
    created () {
      this.searchText = 'te amo'
      this.search()
    }
  }
</script>

<style lang="scss" scoped>

    .searchResults{
      margin-top: -6px;
      font-size: smaller;
    }

    .containerMusic{
      margin-top: 44px;
    }

    .isPlayMusic{
        border: 3px #23d160 solid;
    }
</style>