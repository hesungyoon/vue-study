import * as _ from 'lodash'
import * as mutations from '@/store/mutations'
import actualState from '@/store/state'

describe('mutations', () => {
  it('prependToTasks if empty', () => {
    const state = { tasks: [] }
    mutations.prependToTasks(state, {id: 1, body: 'task one'})
    expect(state.tasks).to.deep.equal([
      {id: 1, body: 'a new task'}
    ])
  })
  it('prependToTasks if already contains items', () => {
    const state = _.clone(actualState)
    state.tasks = [
      {id: 1, body: 'task one'}
    ]
    mutations.prependToTasks(state, {id: 1, body: 'task one'})
    expect(state.tasks).to.deep.equal([{id: 1, body: 'a new task'}, {id: 2, body: 'a new task'}])
  })
  it('mutation test', () => {
    const state = _.clone(actualState)

    mutations.setTasks(state, [
      {id: 1, body: 'task one'},
      {id: 2, body: 'task two'}
    ])

    expect(state.tasks).to.deep.equal([
      {id: 1, body: 'task one'},
      {id: 2, body: 'task two'}
    ])
  })
})

/* it('mutation test', () => {
    const state = {
      task: {
        body: null
      }
    }
    mutations.setTaskBody(state, 'A task')
    expect(state.task.body).to.equal('A task')
  }) */
