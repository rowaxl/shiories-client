import BookDetails from './BookDetails';

export default interface BookmarkDetails {
  id: string
  book?: BookDetails
  title: string
  pageNo: number
  memo: string
  wrotenAt: number
}
