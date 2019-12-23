import React, { useState, useEffect } from 'react'

// interfaces
import { Article } from '../interfaces/Article'

type Props = {
  items: Article[]
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
          <pre>{item.impression}</pre>
          <p>wroten at: {new Date(item.wrotenAt).toLocaleString()}</p>
        </li>
      ))}
    </ul>
  )
}
export default ArticleList
