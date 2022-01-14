const mongoDb = {
  address: process.env.MONGODB_SERVER || '127.0.0.1',
  authDisable: process.env.MONGO_AUTH_DISABLE === 'true',
  database: process.env.MONGODB_DATABASE || 'smart-search',
  port: process.env.MONGODB_PORT || 27017,
  user: process.env.MONGODB_USER || 'user',
  password: process.env.MONGODB_PASSWORD || '123456',
  url: process.env.MONGODB_URL || 'localhost',
  envoirment: process.env.MONGODB_ENVOIRMENT || 'dev'
};

export default mongoDb;
