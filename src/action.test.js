import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constant.js'

import * as actions from './action'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import nock from 'nock'

const text = 'woohoo'
const expectedAction = {
  type: CHANGE_SEARCH_FIELD,
  payload: text
}
const data = [{
  id: 3,
  name: 'Jane',
  email: 'jane@gmail.com'
}]
const mockStore = configureMockStore([thunkMiddleware])
const requestPendingAction = {
  type: REQUEST_ROBOTS_PENDING
}
const requestSuccessAction = {
  type: REQUEST_ROBOTS_SUCCESS,
  payload: data
}

it('creates a search robot action', () => {
  expect(actions.setSearchField(text)).toEqual(expectedAction)
})

it('creates request action', () => {
  const store = mockStore()
  store.dispatch(actions.requestRobots())
  const action = store.getActions()
  expect(action[0]).toEqual(requestPendingAction)

  const apiFetch = nock('https://jsonplaceholder.typicode.com')
    .get('/users')
    .reply(200, {requestSuccessAction})
  expect(apiFetch).toEqual({requestSuccessAction})
})
