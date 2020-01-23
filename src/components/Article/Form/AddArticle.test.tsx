import React from 'react'
import { shallow } from 'enzyme'


import AddArticle from './AddArticle'
import { BookmarkDetails } from 'interfaces/BookmarkDetails'
  
const initalBookmarkDetail = {
  id: '',
  title: '',
  pageNo: 0,
  memo: '',
  wrotenAt: 0
}

// const testValue = {
//   title: 'test title',
//   pageNo: 100,
//   memo: 'test memos'
// }

describe('Test Form: AddArticle', () => {


  let submitResult:BookmarkDetails = {...initalBookmarkDetail}
  console.log('initial value: ', submitResult)

  const submitEvent = jest.fn(result => result)

  const wrapper = shallow(<AddArticle onSubmit={submitEvent} />)

  beforeEach(() => {
    submitResult = {...initalBookmarkDetail}
  })

  test('Form has 2 input and a textarea', () => {
    expect(wrapper.find('#input_title_add_article').length).toEqual(1)
    expect(wrapper.find('#input_page_no_add_article').length).toEqual(1)
    expect(wrapper.find('#input_memo_add_article').length).toEqual(1)
  })

  test('Form has submit and clear button', () => {
    expect(wrapper.find("#button_submit_add_article").length).toEqual(1)
    expect(wrapper.find("#button_clear_add_article").length).toEqual(1)
  })

  test('onSubmit called once when submit button clicked', () => {
    const submitButton = wrapper.find("#button_submit_add_article")
    submitButton.simulate('click')

    expect(submitEvent.mock.results.length).toEqual(1)
    expect(submitResult).toHaveProperty('id')
    expect(submitResult).toHaveProperty('title')
    expect(submitResult).toHaveProperty('pageNo')
    expect(submitResult).toHaveProperty('memo')
    expect(submitResult).toHaveProperty('wrotenAt')
  })

  // TODO: Test with onChange event. 23 Jan (simulate calls onChange, but not change state)
  // test('Submitted data is equal with inputed', () => {
  //   const titleField = wrapper.find("#input_title_add_article")

  //   titleField.simulate('change', { target: { value: testValue.title } })
  //   wrapper.find("#input_page_no_add_article").simulate('change', { target: { value: testValue.pageNo } })
  //   wrapper.find("#input_memo_add_article").simulate('change', { target: { value: testValue.memo } })
  //   wrapper.update()

  //   console.log(titleField.text())
  // })
})
