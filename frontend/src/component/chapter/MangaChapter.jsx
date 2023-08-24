// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import mangaChapter from "../../../apiCall/mangaChapter";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addChapterImg } from "../../reducers/chapterImgReducer";

const MangaChapter = () => {
  let urlParams = useParams();
  let { id, chapter } = urlParams;

  const dispatch = useDispatch();

  const mangas = useSelector((state) => state.allManga);
  let data = mangas.allMangas;

  const chapData = useSelector((state) => state.chapterImg);
  let totalChapter;
  const mangaDetails = data.find((item) => {
    if (item.id == id) {
      totalChapter = item.totalChapter;
      return item;
    }
  });

  useEffect(() => {
    const fetchData = async (values) => {
      try {
        const manga = await mangaChapter(values);
        dispatch(addChapterImg(manga));
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    };

    if (mangaDetails) {
      const { mangaClass, mangaLink } = mangaDetails;
      const regex = /chapterNumberHere/;

      let newUrl = mangaLink.replace(regex, `${chapter}`);
      let values = { url: newUrl, chapClass: mangaClass };

      fetchData(values);
    }
  }, [dispatch, mangaDetails, id, chapter]);

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100 vw-100'>
      <div className='bg-white p-3 rounded '>
        <div className='image-container'>
          {chapter > 1 && (
            <Link to={`/manga/${id}/${parseInt(chapter) - 1}`}>
              <button type='button'>previous</button>
            </Link>
          )}
          {chapter >= totalChapter ? (
            ""
          ) : (
            <Link to={`/manga/${id}/${parseInt(chapter) + 1}`}>
              <button type='button'>next</button>
            </Link>
          )}

          {chapData.chapterImg ? (
            chapData.chapterImg.map((el, index) => {
              return (
                <div key={index}>
                  <img src={el} alt='chapter image' />
                </div>
              );
            })
          ) : (
            <h1>ntg here</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default MangaChapter;
