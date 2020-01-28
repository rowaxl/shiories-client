import Database from 'models/Database'

import {
  bookDatabase,
  bookDatabaseVersion,
  bookStoreKey,
  bookStorePath
} from 'constants/database'

import { BookDetails } from 'interfaces'

const dummy1 = {
  "bookID": 'dummy1',
  "ISBN10": "1603862137",
  "ISBN13": "978-1603862134",
  "title": "The O. Henry Short Story Collection",
  "publishedDate": "2015-02-01",
  "author": "O. Henry",
  "thumbnail": "https://via.placeholder.com/150x200.png/",
  "description": "Over half a century since The Spy Who came in from the Cold made John le Carré a worldwide, bestselling sensation, David Cornwell, the man behind the pseudonym, remains an enigma. He has consistently quarried his life for his writing, and his novels seem to offer tantalizing glimpses of their author - but in the narrative of his life fact and fiction have become intertwined, and little is really known of one of the world's most successful writers. In Cornwell's lonely childhood Adam Sisman uncovers the origins of the themes of love and abandonment which have dominated le Carré's fiction: the departure of his mother when he was five, followed by 'sixteen hugless years'",
  "memo": "memo",
  "created": 9999999
}

const dummy2 = {
  "bookID": 'dummy2',
  "title": "ジキルとハイド",
  "publishedDate": "2020-02-01",
  "author": "ロバート・L. スティーヴンソン",
  "thumbnail": "http://books.google.com/books/content?id=nR4mrgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
  "description": "ロンドンの高名な紳士、ジキル博士の家にある時からハイドという男が出入りし始めた。彼は肌の青白い小男で不愉快な笑みをたたえ、人にかつてない嫌悪、さらには恐怖を抱かせるうえ、ついに殺人事件まで起こしてしまう。しかし、実はジキルが薬物によって邪悪なハイドへと姿を変えていたのだった...。人間の心に潜む善と悪の葛藤を描き、二重人格の代名詞としても名高い怪奇小説。",
  "memo": "memo",
  "created": 9999999
}

export const setDummyBooks = async (window: Window) => {
  const db = new Database()

  await db.init({
    window,
    databaseName: bookDatabase,
    databaseVersion: bookDatabaseVersion,
    storeKey: bookStoreKey,
    storePath: bookStorePath
  })

  await db.set(bookStoreKey, dummy1)
  await db.set(bookStoreKey, dummy2)
}

export const getAllBooks = async (window: Window) => {
  const db = new Database()

  await db.init({
    window,
    databaseName: bookDatabase,
    databaseVersion: bookDatabaseVersion,
    storeKey: bookStoreKey,
    storePath: bookStorePath
  })

  const result = await db.getAll(bookStoreKey)

  if (!result) {
    return []
  }

  return new Promise<BookDetails[]>((resolve, reject) => {
    result.onsuccess = () => {
      const bookList = result.result.map(record => <BookDetails>record)
      resolve(bookList)
    }

    result.onerror = (error) => {
      reject(error)
    }
  })
}
