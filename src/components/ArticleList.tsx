import React, { FunctionComponent, useState, useEffect } from 'react'

// components
import Article from './Article/Article'

// interfaces
import { BookmarkDetails } from '../interfaces/BookmarkDetails'
import GridContainer from './Grid/GridContiner'
import GridItem from './Grid/GridItem'

type Props = {
  items: BookmarkDetails[]
}

const ArticleList: FunctionComponent<Props> = ({ items }) => {
  const [currentItems, setCurrentItems] = useState(items);

  useEffect(() => setCurrentItems(items), [items.length])

  const getCurrentItems = () => currentItems.map(item => (
    <GridItem>
      <Article key={item.id} detail={item} />
    </GridItem>
  ))

  return (
    <GridContainer>
      { getCurrentItems() }
    </GridContainer>
  )
}

export default ArticleList
