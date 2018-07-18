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
    selectedTrack: function (id) {
      console.log(`selected track ${id}`)
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
    this.searchText = 'enamorame'
    this.search()
  }
}
