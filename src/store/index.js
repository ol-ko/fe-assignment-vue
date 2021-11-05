import Vue from 'vue';
import Vuex from 'vuex';
import { getListings } from '../api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listings: [],
  },
  mutations: {
    setListings: (state, listings) => (state.listings = listings),
  },
  actions: {
    async fetchListings({ commit }) {
      const response = await getListings();
      commit('setListings', response.data);
    },
  },
});
