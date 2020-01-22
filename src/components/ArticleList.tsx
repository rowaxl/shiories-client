import React, { useState, useEffect } from 'react'

// interfaces
import { BookmarkDetails } from '../interfaces/BookmarkDetails'

type Props = {
  items: BookmarkDetails[]
}

const ArticleList: React.FunctionComponent<Props> = ({ items }) => {
  const [currentItems, setCurrentItems] = useState(items);

  useEffect(() => setCurrentItems(items), [items.length])

  const getCurrentItems = () => currentItems

  return (
    <ul>
      {getCurrentItems().map(item => (
        <li key={item.id}>
          <h2>{item.title}</h2>
          <pre>{item.memo}</pre>
          <p>wroten at: {new Date(item.wrotenAt).toLocaleString()}</p>
        </li>
      ))}
    </ul>
  )
}
export default ArticleList
