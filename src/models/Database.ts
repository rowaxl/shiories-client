declare global {
  interface Window {
    webkitIndexedDB?: any
    mozIndexedDB?: any
  }
}

type DatabaseInitializeProps = {
  window: Window
  databaseName: string
  databaseVersion: number
  storeKey: string
  storePath: { keyPath: string }
}

class Database {
  public db: IDBDatabase | null
  public store: IDBObjectStore | null
  public transaction: IDBTransaction | null
  public index: IDBIndex | null

  constructor() {
    this.db = null
    this.store = null
    this.transaction = null
    this.index = null
  }

  public init = ({
    window,
    databaseName,
    databaseVersion,
    storeKey,
    storePath,
  }: DatabaseInitializeProps) => new Promise((resolve, reject) => {
    const indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB

    const request = indexedDB.open(databaseName, databaseVersion)

    request.onupgradeneeded = (event) => {
      this.db = (<IDBRequest>event.target).result
      this.store = this.db && this.db.createObjectStore(storeKey, storePath)
      this.index = this.store && this.store.createIndex('index', storePath.keyPath, { unique: true })
    }

    request.onsuccess = (event) => {
      this.db = (<IDBRequest>event.target).result
      this.transaction = this.db && this.db.transaction(storeKey, 'readwrite')
      this.store = this.transaction && this.transaction.objectStore(storeKey)
      this.index = this.store && this.store.index('index')
      
      if (this.db) 
        this.db.onerror = (error: Event) => console.error('db error', error)
      
      if (this.transaction)
        this.transaction.oncomplete = () => this.db && this.db.close()
      
      resolve(this)
    }

    request.onerror = (error) => {
      console.error('req error', error)
      reject(error)
    }
  })

  public get = async (storeName: string, query: string) => {
    if (!this.db) {
      throw new Error('db not initialized')
    }

    try {
      const tx = this.db.transaction(storeName, 'readonly')
      const store = tx.objectStore(storeName)
  
      const result = await store.get(query)
      return result
    } catch (error) {
      console.error('db got error', error)
      return
    }
  }

  public getAll = async (storeName: string) => {
    if (!this.db) {
      throw new Error('db not initialized')
    }

    try {
      const tx = this.db.transaction(storeName, 'readonly')
      const store = tx.objectStore(storeName)
  
      const result = await store.getAll()

      return result
    } catch (error) {
      console.error('db got error', error)
      return
    }
  }

  public set = async (storeName: string, queryObj: any) => {
    if (!this.db) {
      throw new Error('db not initialized')
    }

    try {
      const tx = this.db.transaction(storeName, 'readwrite')
      const store = tx.objectStore(storeName)
  
      const result = await store.put(queryObj)
      return result
    } catch (error) {
      console.error('db got error', error)
      return
    }
  }
}

export default Database