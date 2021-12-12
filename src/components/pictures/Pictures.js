import React from "react";

function Pictures({ photos }) {
  return (
    <div class="container-">
      <div className="picture">
        <div className="row align-items-end">
          <div className="imageContainer">
            <p id="name-photor">{photos.photographer}</p>
            <a target="_blank" rel="noreferrer" href={photos.src.large2x}>
              <img loading="lazy" src={photos.src.large2x} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pictures;