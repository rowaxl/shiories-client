import React from 'react'
import { shallow } from 'enzyme'

import Article from './Article'

describe('Test: Article', () => {
  const wrapper = shallow(<Article detail={} />)

  test('Article has three text fields', () => {
    expect(wrapper.find("#input_title_add_article").length).toEqual(3)
  })
})
