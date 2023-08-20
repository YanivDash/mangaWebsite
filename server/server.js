import express from "express";
import cors from "cors";
import { scraper, scrapTotal } from "./scrapper.js";
import mangaWeb from "./controlers/mangaWeb.js";
import getAllManga from "./controlers/getAllManga.js";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

app.post("/chapter", async (req, res) => {
  const url = `${req.body.url}`;
  const chapClass = `${req.body.chapClass}`;

  const chapter = await scraper(url, chapClass);
  res.json(chapter);
});

app.post("/createManga", async (req, res) => {
  try {
    const data = req.body;
    if (!data) {
      return res.status(400).json({ error: "Invalid request data." });
    }
    console.log(data);
    await mangaWeb(data);

    return res.status(200).json({ message: "Manga creation successful." });
  } catch (error) {
    console.error("An error occurred:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while creating the manga." });
  }
});

app.get("/allManga", async (req, res) => {
  try {
    const data = await getAllManga();

    if (!data || data.length === 0) {
      console.log("entered empty data");
      return res.status(400).json({ error: "Invalid request data." });
    }

    res.status(200).json({ result: data });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "An error occurred." });
  }
});

app.listen(8061, () => {
  console.log("listening on port 8061");
});
