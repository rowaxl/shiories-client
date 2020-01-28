import Database from 'models/Database'

import {
  bookmarkDatabase,
  bookmarkDatabaseVersion,
  bookmarkStoreKey,
  bookmarkStorePath
} from 'constants/database'

import { BookmarkDetails } from 'interfaces'

export const setBookmark = async (window: Window, newBookmark: BookmarkDetails) => {
  const db = new Database()

  await db.init({
    window,
    databaseName: bookmarkDatabase,
    databaseVersion: bookmarkDatabaseVersion,
    storeKey: bookmarkStoreKey,
    storePath: bookmarkStorePath
  })

  await db.set(bookmarkStoreKey, newBookmark)
}

export const getAllBookmarks = async (window: Window) => {
  const db = new Database()

  await db.init({
    window,
    databaseName: bookmarkDatabase,
    databaseVersion: bookmarkDatabaseVersion,
    storeKey: bookmarkStoreKey,
    storePath: bookmarkStorePath
  })

  const result = await db.getAll(bookmarkStoreKey)

  if (!result) {
    return []
  }

  return new Promise<BookmarkDetails[]>((resolve, reject) => {
    result.onsuccess = () => {
      const bookList = result.result.map(record => <BookmarkDetails>record)
      resolve(bookList)
    }

    result.onerror = (error) => {
      reject(error)
    }
  })
}
