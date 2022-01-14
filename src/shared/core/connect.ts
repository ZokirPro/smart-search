import mongoose from 'mongoose';
import mongoDb from '../../config/mongoDb';
export default class Connection {
  url = `mongodb://${mongoDb.address}:${mongoDb.port}/${mongoDb.database}`;
  async connect() {
    mongoose.set('debug', true)
    return mongoose.connect(
      this.url,
      {
        serverSelectionTimeoutMS: 30000,
      } as any,
      error => {
        if (error) {
          console.error(`Database connection error: ${error}`);
        }
      }
    );
  }
}
