import React from 'react'
import { shallow } from 'enzyme'

import AddArticle from './AddArticle'

describe('Test Form: AddArticle', () => {
  const wrapper = shallow(<AddArticle onSubmit={jest.fn()} />)

  test('Form has a text field can input title', () => {
    expect(wrapper.find("#input_title_add_article").length).toEqual(1)
  })

  test('Form has a text area can input impression', () => {
    expect(wrapper.find("#input_impression_add_article").length).toEqual(1)
  })

  test('Form has submit and clear button', () => {
    expect(wrapper.find("#button_submit_add_article").length).toEqual(1)
    expect(wrapper.find("#button_clear_add_article").length).toEqual(1)
  })
})
