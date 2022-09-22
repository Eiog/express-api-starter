import mongoose from "mongoose";
import logger from "./logger";
async function dbConnect() {
  const url = "mongodb://admin:995801@101.200.179.232:27017/blog";
  try {
    const connection = await mongoose.connect(url);
    logger.info("DB connected");
    return connection;
  } catch (error) {
    logger.error("Could not connect to db");
    process.exit(1);
  }
}

export default dbConnect;
