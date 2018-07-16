<template lang="pug">
  #app.has-background-white-ter

    app-header
    
    app-notification(v-show="showNotification")
      p(slot="message") No se encontraron resultados.

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
                :class="{ 'isPlayMusic': track.id === selectedTrackId }"
                :track="track" 
                @play-music="playMusic"
            )
    
    app-footer

</template>

<script>
  import trackService from '@/services/track-service'
  import AppHeader from '@/components/layouts/Header.vue'
  import AppFooter from '@/components/layouts/Footer.vue'
  import AppTrack from '@/components/tracks/Track.vue'
  import AppLoader from '@/components/shared/Loader.vue'
  import AppNotification from '@/components/shared/Notification.vue'

  export default {
    name: 'app',
    components: { AppHeader, AppFooter, AppTrack, AppLoader, AppNotification },
    data () {
      return {
        searchText: '',
        tracks: [],
        selectedTrackId: null,
        isLoading: false,
        showNotification: false
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
            this.showNotification = res.tracks.total === 0
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
      showNotification () {
        if (this.showNotification) {
          setTimeout(() => {
            this.showNotification = false
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

<style lang="scss">
    @import './sass/main';

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