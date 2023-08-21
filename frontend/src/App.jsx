import CreateManga from "./component/upload/CreateManga";
// import Home from "./component/home/Home";
import ExHome from "./component/ghar/ExHome";
import MangaPage from "./component/MangaPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MangaDetail from "./component/manga/MangaDetail";
import { fetchManga } from "../apiCall";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { allMangaAdd } from "./reducers/allMangaReducer";
import MangaChapter from "./component/chapter/MangaChapter";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const manga = await fetchManga();
        dispatch(allMangaAdd(manga.data.result));
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<ExHome />} />
          <Route exact path='/manga/:id' element={<MangaDetail />} />
          <Route exact path='/manga/:id/:chapter' element={<MangaChapter />} />
          <Route exact path='/createManga' element={<CreateManga />} />
          <Route exact path='/mangaPage' element={<MangaPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
