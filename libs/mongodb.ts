import mongoose from 'mongoose';

type connectionType = {
  isConnected:boolean,
  dbConnection:typeof mongoose
};
const connection:connectionType = {
  isConnected: false,
  dbConnection: undefined,
};
const connectMongoDB = async () => {
  // const DB:string = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
  try {
    if (connection.isConnected) {
      return;
    }
    const mongoDbConnection = await mongoose.connect(process.env.DATABASE, {});
    if (mongoDbConnection.connect) {
      connection.isConnected = true;
      connection.dbConnection = mongoDbConnection;
      console.log('connected to DB');
    } else {
      connection.isConnected = false;
      connection.dbConnection = null;
      console.log(' failed to connect to DB');
    }
  } catch (error) {
    console.log(`${error}error from db`);
  }
};
export default connectMongoDB;
