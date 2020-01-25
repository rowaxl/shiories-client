import React, {
  FunctionComponent,
  ReactElement,
} from 'react'

// components
import GridContainer from 'components/Atoms/Grid/Continer'
import customStyles from 'styles/customStyles'

type Props = {
  items?: ReactElement[]
}

const ArticleList: FunctionComponent<Props> = ({ items }) => {
  return (
    <GridContainer
      {...{
        id: "article_list",
        spacing: 3,
        justify: "flex-start",
      }}
      className={customStyles().articleList}
    >
      {items}
    </GridContainer>
  )
}

export default ArticleList
