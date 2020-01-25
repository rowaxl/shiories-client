import React, { FunctionComponent } from 'react'
import customStyles from 'styles/customStyles'

// interface
import BookmarkDetails from 'interfaces/BookmarkDetails'

// components
import Article from 'components/Molecules/Article/Article'
import GridItem from 'components/Atoms/Grid/Item'

const Bookmark: FunctionComponent<{ detail: BookmarkDetails }> = ({ detail }) => {
  const { id, title, pageNo, memo, wrotenAt } = detail

  const renderMemo = (text: string) => {
    if (text.length > 0) {
      return (
        <GridItem>
          <pre
            id={`article_memo_${id}`}
            className={customStyles().articleMemo}
          >
            Memo: {text}
          </pre>
        </GridItem>
      )
    }

    return ''
  }

  return (
    <Article>
      <GridItem>
        <div
          id={`article_title_${id}`}
          className={customStyles().articleTitle}
        >
          {title}
        </div>

        <div
          id={`article_wroten_at_${id}`}
          className={customStyles().wrotenAtDiv}
        >
          {new Date(wrotenAt).toLocaleString()}
        </div>
      </GridItem>

      <GridItem>
        <div
          id={`article_page_no_${id}`}
          className={customStyles().articlePageNo}
        >
          Page No: {pageNo}
        </div>
      </GridItem>

      {renderMemo(memo)}
    </Article>
  )
}

export default Bookmark