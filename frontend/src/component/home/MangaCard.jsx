// import React from "react";

const MangaCard = (manga) => {
  const {
    id,
    mangaName,
    mangaCover,
    websiteRegex,
    websiteName,
    mangaClass,
    mangaLink,
  } = manga.data;

  return (
    <div id={id}>
      <img src={mangaCover} alt={mangaName} />
      <h2>{mangaName}</h2>
    </div>
  );
};

export default MangaCard;
