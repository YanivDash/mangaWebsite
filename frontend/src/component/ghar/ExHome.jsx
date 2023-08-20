import { useEffect, useState } from "react";
import { fetchManga } from "../../../apiCall";
import ExMangaCard from "./ExMangaCard";

import { allMangaAdd } from "../../reducers/allMangaReducer";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const mangas = useSelector((state) => state.allManga);

  let data = mangas.allMangas;

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const manga = await fetchManga();
        dispatch(allMangaAdd(manga.data.result));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
        throw error;
      }
    };

    fetchData();
  }, [dispatch, data]);

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
