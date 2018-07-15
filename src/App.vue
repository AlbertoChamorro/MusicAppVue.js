<template lang="pug">
  #app
    app-header

    section.section
      nav.nav.has-shadow
        .container
            .columns
              .column
                .field.has-addons
                  .control
                    input.input.is-medium(
                      type="text", 
                      placeholder="Search music...", 
                      v-model="searchText"
                    )
                  .control
                    a.button.is-info.is-medium(@click="search") Search
                  .control
                    a.button.is-danger.is-medium(@click="clearSearch") &times;
      .container              
        p.searchResults {{ searchResults }}  

      .container.containerMusic
        .colums
          .column(v-for="track in tracks") 
            | {{ track.name }} - {{ track.artists[0].name }}
    
    app-footer

</template>

<script>
  import trackService from './services/track-service'
  import AppHeader from './components/layouts/Header.vue'
  import AppFooter from './components/layouts/Footer.vue'

  export default {
    name: 'app',
    components: { AppHeader, AppFooter },
    data () {
      return {
        searchText: '',
        tracks: []
      }
    },
    methods: {
      search: function () {
        if (!this.searchText) {
          this.clearSearch()
          return
        }
        trackService.getAll(this.searchText)
          .then(res => {
            // https://api.spotify.com/v1/search?query=the+be&type=track&offset=0&limit=20
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
    mounted () {
  
    }
  }
</script>

<style lang="scss">
    @import './sass/main';

    .searchResults{
      margin-top: 2px;
      font-size: smaller;
    }

    .containerMusic{
      margin-top: 32px;
    }
</style>