import * as types from './mutation-types'

const mutations = {
  [types.INDEX_REPLACE_STATE](state, newState) {
    // for(let key in newState) {
    //   state[key] = newState[key]
    // }
    state.index = newState;
  },
  [types.INDEX_CHANGE_NAME](state, name) {
    state.index.name = name;
  },
  [types.INDEX_CHANGE_AGE](state, age) {
    state.index.age = age
  }
}

export default mutations
