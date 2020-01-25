import React, { FunctionComponent, useState, useEffect } from 'react'

// components
import GridContainer from 'components/Grid/GridContiner'
import Article from 'components/Article/Article'
import customStyles from 'styles/customStyles'

// interfaces
import BookmarkDetails from 'interfaces/BookmarkDetails'

type Props = {
  items: BookmarkDetails[]
}

const ArticleList: FunctionComponent<Props> = ({ items }) => {
  const [currentItems, setCurrentItems] = useState(items);

  useEffect(() => setCurrentItems(items), [items.length])

  const getCurrentItems = () => currentItems.map(item => (
    <Article key={item.id} detail={item} />
  ))

  return (
    <GridContainer
      {...{
        id: "article_list",
        spacing: 3,
        justify: "flex-start",
      }}
      className={customStyles().articleList}
    >
      { getCurrentItems() }
    </GridContainer>
  )
}

export default ArticleList
