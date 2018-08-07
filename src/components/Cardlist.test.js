import CardList from '../components/CardList'
import { shallow } from 'enzyme'
import React from 'react'

it('render card component', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'John Snow',
      username: 'John',
      email: 'john@gmail.com'
    }
  ]
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot()
})