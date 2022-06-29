import mongoose from "mongoose";

const connection = {};

const dbConnect = async () => {
  if (connection.connected) {
    return;
  }
  const db = await mongoose.connect(process.env.MONGO_CON_STR, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  connection.isConnected = db.connections[0].readyState;
  console.log("dbConnect connection: ", connection);
};

export default dbConnect;
