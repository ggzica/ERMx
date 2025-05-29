import { config } from 'dotenv'
config({path:`.env.${process.env.NODE_ENV || 'dev'}.local`})
export const { DB_URI,API,PORT, NODE_ENV,JWT_SECRET,JWT_EXPIRES_IN } = process.env 
