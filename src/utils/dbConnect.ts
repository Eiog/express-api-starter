import mongoose from 'mongoose'
import { MongodbUrl } from '../constants/mongodb'
import logger from './logger'
async function dbConnect() {
  const url = MongodbUrl()
  try {
    const connection = await mongoose.connect(url)
    logger.info('DB connected')
    return connection
  }
  catch (error) {
    logger.error('Could not connect to db')
    process.exit(1)
  }
}

export default dbConnect
