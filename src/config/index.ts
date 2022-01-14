import dotenv from 'dotenv'

dotenv.config()

import app from './app'
import mongoDb from './mongoDb'

export { app, mongoDb }