// import React from "react";

const ExMangaCard = (manga) => {
  const { id, mangaName, mangaCover, mangaLink, totalChapter } = manga.data;

  return (
    <div id={id}>
      <img src={mangaCover} alt={mangaName} />
      <h3>{mangaName}</h3>
      <button>chapter {totalChapter}</button>
      <button>chapter {totalChapter - 1}</button>
    </div>
  );
};

export default ExMangaCard;
