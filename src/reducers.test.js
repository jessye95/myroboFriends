import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constant.js'

import * as reducers from './reducers'

describe('searchRobot', () => {
  const initialStateSearch = {
    searchField: ''
  }
  it('it should return initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' })
  })
  it('it should handle chande searchfield', () => {
    expect(reducers.searchRobots(initialStateSearch, {
      type: CHANGE_SEARCH_FIELD,
      payload: 'apple'
    })).toEqual({ searchField: 'apple' })
  })
})

describe('requestRobot', () => {
  const initialRobotstate = {
    isPending: false,
    robots: [],
    error: ''
  }

  it('it should return initial request state', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialRobotstate)
  })

  it('it should handle pending request', () => {
    expect(reducers.requestRobots(initialRobotstate, {
      type: REQUEST_ROBOTS_PENDING
    }))
      .toEqual({
        robots: [],
        isPending: true,
        error: ''
      })
  })
  it('it should handle request success', () => {
    expect(reducers.requestRobots(initialRobotstate, {
      type: REQUEST_ROBOTS_SUCCESS,
      payload: [{
        id: 3,
        name: 'Jane',
        email: 'jane@gmail.com'
      }]
    }))
      .toEqual({
        robots: [{
          id: 3,
          name: 'Jane',
          email: 'jane@gmail.com'
        }],
        isPending: false,
        error: ''
      })
  })
  it('it should handle request failed', () => {
    expect(reducers.requestRobots(initialRobotstate, {
      type: REQUEST_ROBOTS_FAILED,
      payload: 'err'
    }))
      .toEqual({
        error: 'err',
        robots: [],
        isPending: false
      })
  })
})
