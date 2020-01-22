import React, { FunctionComponent } from 'react'

// interface
import { BookmarkDetails } from '../../interfaces/BookmarkDetails'

// Components
import GridContainer from '../Grid/GridContiner'
import GridItem from '../Grid/GridItem'

// MUI Components
import { Paper } from '@material-ui/core'
import customStyles from '../../styles/customStyles'

const Article: FunctionComponent<{ detail: BookmarkDetails }> = ({ detail }) => {
  const { id, title, pageNo, memo, wrotenAt } = detail

  // const onClickArticle = () => {
    // TODO: highlight article
  // }
  return (
    <GridItem key={id} className={customStyles().articleGridItem} {...{
      xs: 12,
      sm: 12,
      md: 6
    }}>
      <Paper elevation={3} className={customStyles().articlePaper}>
        <GridContainer>
          <GridItem>
            <div
              id={`book_title_${id}`}
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
              id={`page_no_${id}`}
            >
              Page No: {pageNo}
            </div>
          </GridItem>

          <GridItem>
            <pre>
              Memo: {memo}
            </pre>
          </GridItem>
        </GridContainer>
      </Paper>
    </GridItem>
  )
}

export default Article