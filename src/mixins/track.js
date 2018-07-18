const trackMixin = {
  methods: {
    play: function () {
      if (!this.track.preview_url) { return }

      this.$emit('selected-track', this.track.id)
      // emit event bus for component any
      this.$bus.$emit('play-track', this.track)
    }
  }
}

export default trackMixin
