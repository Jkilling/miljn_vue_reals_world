import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: 'abc123', name: 'Adam Jahr' },
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community',
    ],
    /* Had to rename this from todo to events */
    events: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false },
      { id: 3, text: '...', done: true },
      { id: 4, text: '...', done: false },
    ],
  },
  getters: {
    /*     catLength: (state) => {
      return state.categories.length
    }, */
    getEventById: (state) => (id) => {
      return state.events.find((event) => event.id === id)
    },
  },
  mutations: {},
  actions: {},
  modules: {},
})
