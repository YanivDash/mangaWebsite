// import dbConnect from "../check";
import mysql from "mysql";
import { scraper, scrapTotal } from "../scrapper.js";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "manga_website",
});

const mangaWeb = async (values) => {
  const valuesArray = [
    values.websiteName,
    values.mangaName,
    values.mangaCover,
    values.mangaLink,
    values.mangaClass,
  ];
  await scrapTotal(values.mangaLink, values.mangaClass).then((d) => {
    valuesArray.push(d);
  });

  const sql = `INSERT INTO mangalist (\`websiteName\`, \`mangaName\`, \`mangaCover\`, \`mangaLink\`, \`mangaClass\`,\`totalChapter\`)VALUES (?, ?, ?, ?, ?, ?)`;

  db.query(sql, valuesArray, (err, result) => {
    if (result) {
      const message = "succesfull";
      return message;
    } else {
      console.log(err);
      const message = "error";
      return message;
    }
  });
};

export default mangaWeb;
