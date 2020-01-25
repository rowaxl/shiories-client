import React, { FunctionComponent, ReactElement } from 'react'
import Link from 'next/link'

type Props = {
  children?: ReactElement[],
  title: string
}

const Layout: FunctionComponent<Props> = ({ children, title }) => (
  <div>
    <title>
      {title}
    </title>

    <header>
      <nav>
        <Link href="/">
          <a>Bookmarks</a>
        </Link>{' | '}
        <Link href="/books">
          <a>Books</a>
        </Link>{' '}
      </nav>
    </header>

    {children}

    <footer>
      <hr />
      <span>(Footer)</span>
    </footer>
  </div>
)

export default Layout
