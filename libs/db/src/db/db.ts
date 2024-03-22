import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

const pool = mysql.createPool({
  uri: process.env.DATABASE_URI,
});

export const db = drizzle(pool);
