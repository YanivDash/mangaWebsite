import axios from "axios";
import cheerio from "cheerio";

const scraper = async (url, chapClass) => {
  const data = [];
  console.log(url);

  const response = await axios.get(url);
  const $ = cheerio.load(response.data);
  const images = $(chapClass);

  images.each(async (index, element) => {
    const imageUrl = $(element).attr("src");
    let cleanedLink = imageUrl.replace(/\t/g, "").replace(/\n/g, "");
    data.push(cleanedLink);

    // Skip if the src attribute is missing or if it's a data URI
    if (!imageUrl || imageUrl.startsWith("data:")) {
      return;
    }
  });
  return data;
};

const scrapTotal = async (mangaLink, mangaClass) => {
  let totalChapter = 0;
  const regex = /chapterNumberHere/;
  let typeUrl = mangaLink.replace(regex, `8010268116`);
  const typeRegex = /8010268116/;

  let leap = 1000;
  let newUrl = mangaLink.replace(regex, `${1}`);
  let match = 1;
  let imageUrl;

  while (true) {
    try {
      const response = await axios.get(newUrl);
      const $ = cheerio.load(response.data);
      const images = $(mangaClass);
      imageUrl = $(images[0]).attr("src");
    } catch (error) {
      console.log({ match: "error" });
      imageUrl = "";
    }
    let numNow = new RegExp(`${match}`);
    if (imageUrl) {
      newUrl = typeUrl.replace(typeRegex, `${match + leap}`);
      match = match + leap;
      console.log(match);
    } else if (leap === 1000) {
      newUrl = typeUrl.replace(typeRegex, `${match - 1000}`);
      match = match - 1000;
      leap = 500;
      console.log("leap 500");
    } else if (leap === 500) {
      newUrl = typeUrl.replace(typeRegex, `${match - 500}`);
      leap = 100;
      match = match - 500;
      console.log("leap 100");
    } else if (leap === 100) {
      newUrl = typeUrl.replace(typeRegex, `${match - 100}`);
      leap = 10;
      match = match - 100;
      console.log("leap 10");
    } else if (leap === 10) {
      newUrl = typeUrl.replace(typeRegex, `${match - 10}`);
      leap = 1;
      match = match - 10;
      console.log("leap 1");
    } else {
      totalChapter = match - 1;
      break;
    }
  }

  console.log({ total: totalChapter });
  return totalChapter;
};

export { scraper, scrapTotal };
