import { Book } from './Book';

export type Article = {
  id: string,
  userId: string,
  book: Book,
  pageStart: number,
  pageEnd: number,
  details: string,
  wrotedAt: bigint,
}
