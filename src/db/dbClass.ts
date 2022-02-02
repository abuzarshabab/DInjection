import { MongoClient, Db } from 'mongodb';
const url = 'mongodb://localhost:27017';

let db;

export class Database {
  db = null;
  constructor() {
    this.connect();
  }

  connect() {
    const dbClient = new MongoClient(url);
    dbClient
      .connect()
      .then((connection) => {
        this.db = connection.db;
        db = connection.db();
        console.log('Connection succeded');
      })
      .catch((err) => {
        console.log('error in connection', err);
      });
  }

  connection() {
    if (db) return db;
  }
}

export function dbInstanc() {
  if (db) return db;
}
