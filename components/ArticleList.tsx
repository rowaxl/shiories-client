import * as React from 'react'

type Article = {
  id: string,
  title: string,
  impression: string,
  wrotenAt: number
}

type Props = {
  items: Article[]
}

const List: React.FunctionComponent<Props> = ({ items }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>
        <h2>{item.title}</h2>
        <pre>{item.impression}</pre>
        <p>wroten at: {new Date(item.wrotenAt.toString())}</p>
      </li>
    ))}
  </ul>
)

export default List
