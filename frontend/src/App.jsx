import {
  Home,
  CreateManga,
  MangaDetail,
  Navbar,
  SubHeader,
  MangaChapter,
} from "./component";
import { Routes, Route, useLocation } from "react-router-dom";
import { fetchManga } from "../apiCall";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { allMangaAdd } from "./reducers/allMangaReducer";

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();

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
      {location.pathname != "/" && <Navbar />}
      <Routes>
        <Route
          path='/'
          element={
            <>
              <SubHeader />
              <Navbar />
              <Home />
            </>
          }
        />
        <Route exact path='/manga/:id' element={<MangaDetail />} />
        <Route exact path='/manga/:id/:chapter' element={<MangaChapter />} />
        <Route exact path='/createManga' element={<CreateManga />} />
      </Routes>
    </>
  );
};

export default App;
