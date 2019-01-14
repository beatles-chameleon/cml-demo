import * as mutationTypes from './mutation-types'
import * as actionTypes from './action-types'

export default {
  [actionTypes.INDEX_CHANGE_NAME]({commit,state}, params = {}) {
    new Promise(function(resolve, reject) {
      setTimeout(()=>{
        resolve('action名称'+ new Date().getTime())
      },2000)
    }).then(res=>{
      commit(mutationTypes.CHANGE_NAME, res);
    })
  },
  
}
