import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {id: 'name123', name: 'Adam'},
    categories: ['welfare', 'animal']
  },
  mutations: {

  },
  actions: {

  },
  modules: {

  },
  getters: {
    catLenght: state => {
      return state.categories.length
    }
  }
});