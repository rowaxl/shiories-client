export default interface BookDetails {
  id: string
  ISBN10?: string
  ISBN13?: string
  title: string
  publishedDate?: number
  author?: string
  thumbnail?: string
  description?: string
  memo?: string
  created: number
}