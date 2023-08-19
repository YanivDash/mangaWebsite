import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

const mangaWeb = async () => {
  const db = await mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DB,
  });

  return db;
};

export default mangaWeb;
