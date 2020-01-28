export interface BookDetails {
  bookID: string
  title: string
  publishedDate?: string
  author?: Array<string>
  thumbnail?: string
  description?: string
  memo?: string
  created: number
  [key:string]: string | number | Array<string> |undefined
}

export interface BookmarkDetails {
  id: string
  book?: BookDetails
  title: string
  pageNo: number
  memo: string
  wrotenAt: number
}

export interface BookSearchQuery {
  q: string
  intitle?: string
  inauthor?: string
  isbn?: string
}

interface RawBookData {
  kind: string,
  id: string,
  etag: string,
  selfLink: string,
  volumeInfo: {
    title: string,
    authors: Array<string>,
    publisher: string,
    publishedDate: string,
    description: string,
    industryIdentifiers: Array<{ type: string, identifier: string}>,
    pageCount: number,
    imageLinks: {
      smallThumbnail: string,
      thumbnail: string
    },
    language: string,
  }
}

export interface BookSearchResult {
  kind: string
  totalItem: number
  items: RawBookData[]
}