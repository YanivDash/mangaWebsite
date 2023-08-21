import { useState } from "react";
import ExMangaCard from "./ExMangaCard";
import { useSelector } from "react-redux";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const mangas = useSelector((state) => state.allManga);

  let data = mangas.allMangas;
  if (!data) setLoading(true);

  return (
    <div style={{ display: "flex" }}>
      {loading ? (
        <h3>Loading...</h3>
      ) : data.length > 0 ? (
        data.map((item, index) => {
          return <ExMangaCard key={index} data={item} />;
        })
      ) : (
        <h3>nothing to show here</h3>
      )}
    </div>
  );
};

export default Home;
