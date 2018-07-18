import Vue from 'vue'
import Vuex from 'vuex'

import trackService from '@/services/track-service'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    track: {}
  },
  mutations: {
    setTrack (state, track) {
      state.track = track
    }
  },
  getters: {
    trackTitle (state, getters) {
      if (!state.track.name) { return '' }
      return `${state.track.name} - ${state.track.artists[0].name}`
    }
  },
  actions: {
    getTrackById (context, payload) {
      return trackService.detail(payload.id)
        .then(res => {
          context.commit('setTrack', res)
          return res
        })
    }
  }
})

export default store
