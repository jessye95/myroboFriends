import { shallow } from 'enzyme'
import React from 'react'
import Card from './Card'

// Unlike like shallow(), mount does a full render & requires a browser environ.
//  It can be rendered to jsDOM or headless browser
// Render sends  react component to a static HTML using a lib(cheerios)
it('render card component', () => {
  expect(shallow(<Card />)).toMatchSnapshot()
})
