import React, { FunctionComponent } from 'react'

// interface
import { BookmarkDetails } from '../../interfaces/BookmarkDetails'

// Components
import GridContainer from '../Grid/GridContiner'
import GridItem from '../Grid/GridItem'

// MUI Components
import { Paper } from '@material-ui/core'
import { customStyles } from '../../styles'

const Article: FunctionComponent<{ detail: BookmarkDetails }> = ({ detail }) => {
  const { title, pageNo, memo, wrotenAt } = detail

  // const onClickArticle = () => {
    // TODO: highlight article
  // }

  return (
    <Paper elevation={3} >
      <GridContainer>
        <GridItem>
          <div className={customStyles().buttonDiv}>{ title }</div>
          <div>{ new Date(wrotenAt).toLocaleString() }</div>
        </GridItem>

        <GridItem>
          <div>{ pageNo }</div>
        </GridItem>

        <GridItem>
          <pre>{ memo }</pre>
        </GridItem>
      </GridContainer>
    </Paper>
  )
}

export default Article