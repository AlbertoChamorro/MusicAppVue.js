<template lang="pug">

  main.has-background-white-ter
    transition(name="move")
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
      transition(name="move")
        app-loader(v-show="isLoading")

      .container.containerTrack
        .columns.is-multiline
          .column.is-one-quarter(v-for="track in tracks") 
            app-track(
                v-blur="track.preview_url"
                :class="{ 'isSelectedTrack': track.id === selectedTrackId }"
                :track="track" 
                @selected-track="selectedTrack"
            )

</template>

<script src="./Search.js"></script>
<style lang="scss" src="./Search.scss" scoped></style>
