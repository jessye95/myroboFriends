import React from 'react'
import { shallow } from 'enzyme'
import MainPage from './MainPage'

let wrapper
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false
  }
  wrapper = shallow(<MainPage {...mockProps} />)
})

it('rendering MainPage', () => {
  expect(wrapper).toMatchSnapshot()
})

it('filters robots properly 2', () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 3,
      name: 'Jane',
      email: 'jane@gmail.com'
    }],
    searchField: 'jane',
    isPending: false
  }
  const wrapper2 = shallow(<MainPage {...mockProps2} />)
  expect(wrapper2.instance().filterRobos()).toEqual([{
    'email': 'jane@gmail.com',
    'id': 3,
    'name': 'Jane'}])
})

it('filters robots properly 3', () => {
  const mockProps3 = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 3,
      name: 'Jane',
      email: 'jane@gmail.com'
    }],
    searchField: 'o',
    isPending: false
  }
  const filteredRobots = []
  const wrapper3 = shallow(<MainPage {...mockProps3} />)

  expect(wrapper3.instance().filterRobos())
    .toEqual(filteredRobots)
})
