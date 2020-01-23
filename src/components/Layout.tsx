import * as React from 'react'
import Link from 'next/link'

type Props = {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({
  children
}) => (
  <div>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
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
