export const getTask = (state) => state.task

export const getTasks = (state) => {
  return state.tasks.sort((a, b) => {
    return b['id'] - a['id']
  })
}
