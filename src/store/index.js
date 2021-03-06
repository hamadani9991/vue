import Vue from "vue";
import Vuex from "vuex";
import EventService from '../services/EventService'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {id: 'name123', name: 'Adam'},
    categories: ['welfare', 'animal'],
    events: []
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event)
    }
  },
  actions: {
    createEvent({commit}, event) {
    return EventService.postEvent(event).then(() => {
      commit('ADD_EVENT', event)
    })
    }
  },
  modules: {

  },
  getters: {
    catLenght: state => {
      return state.categories.length
    }
  }
});