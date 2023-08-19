// import dbConnect from "../check";
import mysql from "mysql";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "manga_website",
});

const getAllManga = () => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM mangalist`;
    db.query(sql, (err, result) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

export default getAllManga;
