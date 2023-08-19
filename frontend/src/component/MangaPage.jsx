// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { mangaChapter } from "../../apiCall";

const MangaPage = () => {
  const [data, setData] = useState([]);
  const [values, setValues] = useState({
    url: "",
    chapClass: "",
  });

  const handleSubmit = async (event) => {
    if (event) event.preventDefault();

    console.log(values);
    try {
      const chapter = await mangaChapter(values);
      setData(chapter);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const incDec = async (operator) => {
    let match = values.url.match(/chapter-(\d+)/);

    if (operator === "inc") {
      if (parseInt(match[1]) >= 0) {
        let newUrl = values.url.replace(
          /chapter-\d+/,
          `chapter-${parseInt(match[1]) + 1}`
        );
        const chapter = await mangaChapter({
          url: newUrl,
          chapClass: values.chapClass,
        });
        setData(chapter);
        setValues({ ...values, url: newUrl });
      } else {
        console.log("chapter can't go on ");
        return;
      }
    } else if (operator === "dec") {
      if (parseInt(match[1]) > 1) {
        let newUrl = values.url.replace(
          /chapter-\d+/,
          `chapter-${parseInt(match[1]) - 1}`
        );
        const chapter = await mangaChapter({
          url: newUrl,
          chapClass: values.chapClass,
        });
        setData(chapter);
        setValues({ ...values, url: newUrl });
      } else {
        alert("chapter cant be zero or below");
        return;
      }
    }
  };

  const chapterBack = () => {
    incDec("dec");
  };

  const chapterNext = () => {
    incDec("inc");
  };

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100 vw-100'>
      <div className='bg-white p-3 rounded '>
        <h2>Provide data</h2>
        <button type='button' onClick={chapterBack}>
          previous
        </button>
        <button type='button' onClick={chapterNext}>
          next
        </button>
        <form className='container' onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='url'>
              {" "}
              <strong>Name</strong>
            </label>
            <input
              required
              type='text'
              placeholder='Enter url'
              name='name'
              className='form-control rounded-0'
              onChange={(e) => setValues({ ...values, url: e.target.value })}
            />
          </div>
          <div>
            <h2>Select an option:</h2>
            <select
              onChange={(e) =>
                setValues({ ...values, chapClass: e.target.value })
              }
            >
              <option value=''>Select an option</option>
              <option value='.reading-content img'>Tonily</option>
              <option value='.elementor-widget-container img'>SLR</option>
            </select>
          </div>
          <button type='submit' className='btn btn-success rounded-0 w-100'>
            Sign Up
          </button>
        </form>
      </div>
      <div className='image-container'>
        {data.map((el, index) => {
          return (
            <div key={index}>
              <img src={el} alt='chapter image' />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MangaPage;
