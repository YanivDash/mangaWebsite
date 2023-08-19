import { useEffect, useState } from "react";
import { fetchManga } from "../../../apiCall";
import MangaCard from "./mangaCard";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [update, setUpdate] = useState(false)

  useEffect(() => {
    if (data.length > 0) {
      return;
    }

    const fetchData = async () => {
      if (data.length > 0) return;

      try {
        const manga = await fetchManga();
        console.log("Fetched Data:", manga.data);
        setData(manga.data.result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
        throw error;
      }
    };

    fetchData();
  }, [data]);

  return (
    <div style={{ display: "flex" }}>
      {loading ? (
        <h3>Loading...</h3>
      ) : data.length > 0 ? (
        data.map((item, index) => {
          return <MangaCard key={index} data={item} />;
        })
      ) : (
        <h3>nothing to show here</h3>
      )}
    </div>
  );
};

export default Home;
