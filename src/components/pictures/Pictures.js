import React from "react";

const Pictures = ({ photos }) => {
    return (
        <div class="container-">
            <div class="row align-items-end">
        <div className="picture">
            <p className="name-photor">
                {photos.photographer}
                </p>
            <div className="imageContainer">
                <a target="_blank" rel="noreferrer" href={photos.src.large}>
                    <img src={photos.src.large} alt="" />
                </a>               
            </div>
        </div>
              </div>
            </div>
    );
};

export default Pictures;