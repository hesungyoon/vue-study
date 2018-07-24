export const setTaskBody = (state, prop) => {
  state.task.body = prop
}

export const setTask = (state, prop) => {
  state.tasks = prop
}

export const setTalks = (state, tasks) => {
  state.tasks = tasks
}

export const prependToTasks = (state, tasks) => {
  state.tasks.unsift(tasks)
}
