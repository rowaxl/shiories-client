import { BookSearchQuery } from 'interfaces'
export default (query: BookSearchQuery) => {
  const q = 'q:' + query.q
  const intitle = query.intitle ? '&intitle:' + query.intitle : ''
  const inauthor = query.inauthor ? '&inauthor:' + query.inauthor : ''
  const isbn = query.isbn ? '&isbn:' + query.isbn : ''

  return q+intitle+inauthor+isbn.replace(' ', '+')
}