import Search from '@/components/search/Search.vue'
import About from '@/components/About.vue'
import TrackDetail from '@/components/tracks/TrackDetail.vue'

const routes = [
  { path: '/', component: Search, name: 'search' },
  { path: '/about', component: About, name: 'about' },
  { path: '/track/:id', component: TrackDetail, name: 'track-detail' }
]

export default routes
