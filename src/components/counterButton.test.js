import CounterButton from '../components/counterButton'
import { shallow } from 'enzyme'
import React from 'react'

describe('counterButton-test', () => {
  const mockColor = 'green'

  it('render counterButton', () => {
    expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot()
  })

  it('simulate click', () => {
    const wrapper = shallow(<CounterButton color={mockColor} />)
    // wrapper.find('#counter').simulate('click')
    wrapper.find('[id="counter"]').simulate('click')
    expect(wrapper.state('count')).toEqual(1)
    expect(wrapper.props().color).toEqual('green')
  })
})
