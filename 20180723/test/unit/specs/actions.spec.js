import * as actions from '@/store/actions'
import { testAction } from '../helpers'
describe('actions', () => {
  it('saveTask if a task has not been entered', (done) => {
    const state = {
      task: {
        body: null
      }
    }
    testAction(actions.saveTask, null, state, [
      { type: 'setMesaage', payload: 'please enter a task'}
    ], done)
  })
})
