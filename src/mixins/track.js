const trackMixin = {
  methods: {
    play: function () {
      if (!this.track.preview_url) { }
      this.$store.commit('setTrack', this.track)
    }
  }
}

export default trackMixin
