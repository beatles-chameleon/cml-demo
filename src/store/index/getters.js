import * as types from './getter-types'

export default {
  [types.INDEX_DESC_NAME]: function(state, getters) {
    return `我叫：${state.index.name}。`
  },
  [types.INDEX_DESC_AGE]: function(state, getters) {
    return `今年：${state.index.age} 岁。`
  }
}

