import * as getters from '@/store/getters'

describe('getters', () => {
  it('getTask', () => {
    const state = {
      tasks: [
        {id: 1, body: 'one'},
        {id: 2, body: 'two'},
        {id: 3, body: 'three'}
      ]
    }
    expect(getters.getTasks(state)).to.deep.equal([
      {id: 1, body: 'one'},
      {id: 2, body: 'two'},
      {id: 3, body: 'three'}
    ])
  })
})

/* const state = {
      task: {
        body: 'a new task'
      }
    }
    expect(getters.getTask(state)).to.deep.equal({
      body: 'a new task'
    })
    expect(getters.getTasks(state)).to.deep.equal([
      {id: 3, body: 'task three'},
      {id: 2, body: 'task two'},
      {id: 1, body: 'task one'}
    ]) */
