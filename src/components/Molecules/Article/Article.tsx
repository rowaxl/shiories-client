import React, { FunctionComponent, ReactNode } from 'react'
import customStyles from 'styles/customStyles'

// components
import GridContainer from 'components/Atoms/Grid/Continer'
import GridItem from 'components/Atoms/Grid/Item'

// MUI components
import { Paper } from '@material-ui/core'

type Props = {
  children?: ReactNode
}

const Article: FunctionComponent<Props> = ({ children }) => {
  // const onClickArticle = () => {
    // TODO: highlight article
  // }
  return (
    <GridItem className={customStyles().articleGridItem} {...{
      xs: 12,
      sm: 12,
      md: 6
    }}>
      <Paper elevation={3} className={customStyles().articlePaper}>
        <GridContainer>
          {children}
        </GridContainer>
      </Paper>
    </GridItem>
  )
}

export default Article