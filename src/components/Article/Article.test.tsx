import React from 'react'
import { shallow } from 'enzyme'

import Article from './Article'

const testArticleDetailWithMemo = {
  id: 'testID',
  title: 'testTitle',
  pageNo: 999,
  memo: 'testMemo',
  wrotenAt: 0
}

const testArticleDetailWithoutMemo = {
  id: 'testID2',
  title: 'testTitle2',
  pageNo: 99,
  memo: '',
  wrotenAt: 100
}

describe('Test: Article with title', () => {
  const article = shallow(<Article detail={testArticleDetailWithMemo} />)

  test('Article has title,', () => {
    expect(article.find(`#article_title_${testArticleDetailWithMemo.id}`).length).toEqual(1)
    expect(article.find(`#article_title_${testArticleDetailWithMemo.id}`).text()).toEqual(testArticleDetailWithMemo.title)
  })

  test('Article has wroten time,', () => {
    expect(article.find(`#article_wroten_at_${testArticleDetailWithMemo.id}`).length).toEqual(1)
    expect(article.find(`#article_wroten_at_${testArticleDetailWithMemo.id}`).text()).toEqual(new Date(testArticleDetailWithMemo.wrotenAt).toLocaleString())
  })

  test('Article has pageNo,', () => {
    expect(article.find(`#article_page_no_${testArticleDetailWithMemo.id}`).length).toEqual(1)
    expect(article.find(`#article_page_no_${testArticleDetailWithMemo.id}`).text()).toEqual('Page No: ' + testArticleDetailWithMemo.pageNo.toString())
  })

  test('Article has memo,', () => {
    expect(article.find(`#article_memo_${testArticleDetailWithMemo.id}`).length).toEqual(1)
    expect(article.find(`#article_memo_${testArticleDetailWithMemo.id}`).text()).toEqual('Memo: ' + testArticleDetailWithMemo.memo)
  })
})

describe('Test: Article without title', () => {
  const article = shallow(<Article detail={testArticleDetailWithoutMemo} />)

  test('Article has title,', () => {
    expect(article.find(`#article_title_${testArticleDetailWithoutMemo.id}`).length).toEqual(1)
    expect(article.find(`#article_title_${testArticleDetailWithoutMemo.id}`).text()).toEqual(testArticleDetailWithoutMemo.title)
  })

  test('Article has wroten time,', () => {
    expect(article.find(`#article_wroten_at_${testArticleDetailWithoutMemo.id}`).length).toEqual(1)
    expect(article.find(`#article_wroten_at_${testArticleDetailWithoutMemo.id}`).text()).toEqual(new Date(testArticleDetailWithoutMemo.wrotenAt).toLocaleString())
  })

  test('Article has pageNo,', () => {
    expect(article.find(`#article_page_no_${testArticleDetailWithoutMemo.id}`).length).toEqual(1)
    expect(article.find(`#article_page_no_${testArticleDetailWithoutMemo.id}`).text()).toEqual('Page No: ' + testArticleDetailWithoutMemo.pageNo.toString())
  })

  test('Article hasn\'t memo,', () => {
    expect(article.find(`#article_memo_${testArticleDetailWithoutMemo.id}`).length).toEqual(0)
  })
})