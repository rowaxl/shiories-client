import React from 'react'
import { shallow } from 'enzyme'
import AddArticle from '../../InputForm/AddArticle'

describe('Test Form: AddArticle', () => {
  test('Form has a text field', () => {
    const wrapper = shallow(<AddArticle onSubmit={jest.fn()} />)

    expect(wrapper.find("#title").length).toEqual(1)
  })
})
