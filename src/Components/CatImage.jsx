import React from "react";
import style from "./CatImage.module.css";

const CatImage = (props) => {
  const { img, loading, fetchImages } = props;
  return (
    <div className={style.img_container}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        img && <img src={img[0]?.url} alt="Cat" className={style.cat_img} />
      )}

      <button onClick={fetchImages} className={style.button}>
        Get New Image
      </button>
    </div>
  );
};

export default CatImage;
