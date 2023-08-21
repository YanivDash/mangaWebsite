import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MangaDetail = () => {
  let urlParams = useParams();
  let urlId = urlParams.id;

  const mangas = useSelector((state) => state.allManga);
  let data = mangas.allMangas;

  const mangaDetails = data.find((item) => {
    if (item.id == urlId) return item;
  });

  if (mangaDetails) {
    let { mangaCover, mangaName, totalChapter } = mangaDetails;
    const chapters = [];
    while (totalChapter >= 1) {
      chapters.push(totalChapter);
      totalChapter = totalChapter - 1;
    }

    return (
      <div>
        <img src={mangaCover} alt='mangaCover' />
        <h1>{mangaName}</h1>
        {chapters.map((item, index) => {
          return (
            <Link key={index} to={`/manga/${urlId}/${item}`}>
              <h2>chapter {item}</h2>
            </Link>
          );
        })}
      </div>
    );
  }

  return <h1>hello</h1>;
};

export default MangaDetail;
