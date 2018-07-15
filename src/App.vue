<template lang="pug">
  #app
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
                  p.searchResults {{ searchResults }}  
      .container.containerMusic
        .colums
          .column(v-for="track in tracks") {{ track.name }} - {{ track.artist }}
</template>

<script>
  const tracks = [
    { name: 'En los montes, en los valles', artist: 'Marcos Witt' },
    { name: 'Cuan grande es el', artist: 'Crithian Lewis' },
    { name: 'Cubreme', artist: 'Lilly Goodmand' },
    { name: 'Supe que me amabas', artist: 'Marcela Gandara' },
    { name: 'Tu estas aqui', artist: 'Jesus Adrian Romero & Marcela Gandara' },
    { name: 'Mi herencia', artist: 'Jesus Adrian Romero' }
  ]

  export default {
    name: 'app',
    data () {
      return {
        searchText: '',
        tracks: []
      }
    },
    methods: {
      search: function () {
        this.tracks = tracks
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
      margin-left: 10px;
      margin-top: 10px;
    }

    .containerMusic{
      margin-top: 32px;
    }
</style>