import React from "react";
import "./GalleryItem.css";
import { Link } from "react-router";

const GalleryItem = ({ item }) => {
  return (
    <div className="galleryItem" style={{ gridRowEnd: `span ${Math.ceil(item.height / 100)}` }}>
      <img src={item.media} alt="" />
      <Link to={`/pin/${item.id}`} className="overlay" />
      <button className="saveButton">Save</button>
      <div className="overlayIcons">
        <button className="share">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
            <path
              d="M8 7C8 7 10.1958 4.28386 11.4044 3.23889C11.5987 3.0709 11.8169 2.99152 12.0337 3.00072C12.2282 3.00897 12.4215 3.08844 12.5958 3.23912C13.8041 4.28428 16 7 16 7M12.0337 4L12.0337 15"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M8 11C6.59987 11 5.8998 11 5.36502 11.2725C4.89462 11.5122 4.51217 11.8946 4.27248 12.365C4 12.8998 4 13.5999 4 15V16C4 18.357 4 19.5355 4.73223 20.2678C5.46447 21 6.64298 21 9 21H15C17.357 21 18.5355 21 19.2678 20.2678C20 19.5355 20 18.357 20 16V15C20 13.5999 20 12.8998 19.7275 12.365C19.4878 11.8946 19.1054 11.5122 18.635 11.2725C18.1002 11 17.4001 11 16 11"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default GalleryItem;
