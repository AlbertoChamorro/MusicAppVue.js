<template lang="pug">
  #app.has-background-white-ter

    app-header
        
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
      
      app-loader(v-show="isLoading")

      .container
        .columns.is-centered
          .column 
              p.searchResults.has-text-dark.is-pulled-left {{ searchResults }}  

      .container.containerMusic
        .columns.is-multiline
          .column.is-one-quarter(v-for="track in tracks") 
            app-track(:track="track")
    
    app-footer

</template>

<script>
  import trackService from '@/services/track-service'
  import AppHeader from '@/components/layouts/Header.vue'
  import AppFooter from '@/components/layouts/Footer.vue'
  import AppTrack from '@/components/tracks/Track.vue'
  import AppLoader from '@/components/shared/Loader.vue'

  export default {
    name: 'app',
    components: { AppHeader, AppFooter, AppTrack, AppLoader },
    data () {
      return {
        searchText: '',
        tracks: [],
        isLoading: false
      }
    },
    methods: {
      search: function () {
        if (!this.searchText) {
          this.clearSearch()
          return
        }
        this.isLoading = true
        trackService.getAll(this.searchText)
          .then(res => {
            // https://api.spotify.com/v1/search?query=the+be&type=track&offset=0&limit=20
            this.isLoading = false
            this.tracks = res.tracks.items
          })
      },
      clearSearch: function () {
        this.searchText = ''
        this.tracks = []
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
      margin-top: 4px;
      font-size: smaller;
    }

    .containerMusic{
      margin-top: 64px;
    }
</style>