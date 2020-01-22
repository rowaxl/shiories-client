import React, { FunctionComponent, useState } from 'react'

// interface
import { BookmarkDetails } from '../../interfaces/BookmarkDetails'

// Components
import GridContainer from '../Grid/GridContiner'
import GridItem from '../Grid/GridItem'

// MUI Components
import { TextField, TextareaAutosize } from '@material-ui/core'

const Article: FunctionComponent<{
  detiail: BookmarkDetails,
  onClick: Function
}> =
  ({ detiail, onClick }) => {
    const onClickArticle = () => {
      onClick()
    }

    return (
    )
}

export default Article