import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017';

export class DbRepository {
  db;
  constructor() {
    const databaseClient = new MongoClient(url);
    databaseClient
      .connect()
      .then((connection) => {
        this.db = connection.db();
        console.log('Connection succeded');
      })
      .catch((err) => {
        console.log('error in connection', err);
      });
  }

  async addUser(email: string, password: string, name: string) {
    const user = await this.db
      .collection('nest')
      .insertOne({ email, name, password });
    return user;
  }

  async findUser(email: string, password: string) {
    const user = await this.db.collection('nest').findOne({ email, password }); //Db Query
    console.log(user);
    return { user, msg: 'You are logged in' };
  }
}
