import React from "react";
import mangaChapter from "../../apiCall/mangaChapter";

const PrevNext = (link) => {
  let match = link.match(/chapter-(\d+)/);
  let cc = parseInt(match[1]);
  let newUrl = link.replace(/chapter-\d+/, `chapter-${parseInt(match[1]) - 1}`);

  const incDec = () => {};

  const chapterBack = () => {
    let newLink = incDec("dec");
    return newLink;
  };
  const chapterNext = () => {
    let newLink = incDec("inc");
    return newLink;
  };
  return (
    <div>
      <button type='button' onClick={chapterBack}>
        previous
      </button>
      <button type='button' onClick={chapterNext}>
        next
      </button>
    </div>
  );
};

export default PrevNext;
