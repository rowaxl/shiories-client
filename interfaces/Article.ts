import { Book } from './Book';

export type Article = {
  id: string,
  userId: string,
  book: Book,
  details: string,
  wrotedAt: bigint,
}
