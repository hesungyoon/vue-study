import * as api from '@/api'

export const saveTask = ({ commit, state }) => {
  if (!state.task.body) {
    commit('setMessage', 'please enter a task')
    return
  }
  api.storeTask({body: state.task.body}).then((response) => {
    commit('prependToTasks', response.data)
    commit('setTaskBody', null)
  })
}

/* api.storeTask({ body: state.task.body }).then((response) => {
    commit('prependToTasks', response.data)
    commit('setTaskBody', null)
  })
} */
