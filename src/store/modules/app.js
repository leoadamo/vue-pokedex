const state = {
  isMenuOpen: false
};

const getters = {
  isMenuOpen: state => state.isMenuOpen
};

const actions = {
  toggleMenu: ({ commit }) => {
    commit('TOGGLE_MENU');
  }
};

const mutations = {
  TOGGLE_MENU: state => {
    state.isMenuOpen = !state.isMenuOpen;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
