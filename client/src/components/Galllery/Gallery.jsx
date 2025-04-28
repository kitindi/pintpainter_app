import React from "react";
import "./Gallery.css";
// import { items } from "../../../src/gallery/images";
import GalleryItem from "../GalleryItem/GalleryItem";

// temp data
const items = [
  {
    id: 1,
    media: "/pins/image_1.jpg",
    width: 1260,
    height: 1000,
  },
  {
    id: 2,
    media: "/pins/image_2.jpg",
    width: 1260,
    height: 1000,
  },
  {
    id: 3,
    media: "/pins/image_3.jpg",
    width: 1260,
    height: 1000,
  },
  {
    id: 4,
    media: "/pins/image_4.jpg",
    width: 1260,
    height: 1000,
  },
  {
    id: 5,
    media: "/pins/image_5.jpg",
    width: 1260,
    height: 1000,
  },
  {
    id: 6,
    media: "/pins/image_6.jpg",
    width: 1260,
    height: 1000,
  },
  {
    id: 7,
    media: "/pins/image_7.jpg",
    width: 1260,
    height: 1000,
  },
  {
    id: 8,
    media: "/pins/image_8.jpg",
    width: 1260,
    height: 1000,
  },
  {
    id: 9,
    media: "/pins/image_9.jpg",
    width: 1260,
    height: 1000,
  },
  {
    id: 10,
    media: "/pins/image_10.jpg",
    width: 1260,
    height: 1000,
  },
  {
    id: 11,
    media: "/pins/image_11.jpg",
    width: 1260,
    height: 1000,
  },
  {
    id: 12,
    media: "/pins/image_12.jpg",
    width: 1260,
    height: 1000,
  },
  {
    id: 13,
    media: "/pins/image_13.jpg",
    width: 1260,
    height: 1000,
  },
  {
    id: 14,
    media: "/pins/image_14.jpg",
    width: 1260,
    height: 1000,
  },
  {
    id: 15,
    media: "/pins/image_15.jpg",
    width: 1260,
    height: 1000,
  },
];

const Gallery = () => {
  return (
    <div className="gallery">
      {items.map((item) => (
        <GalleryItem key={items.id} item={item} />
      ))}
    </div>
  );
};

export default Gallery;
