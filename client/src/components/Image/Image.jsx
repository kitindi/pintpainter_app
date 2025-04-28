import React from "react";
import { IKImage } from "imagekitio-react";

const Image = ({ path, alt, w, h, className }) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
      path={path}
      transformation={[
        {
          width: w,
          height: h,
        },
      ]}
      alt={alt}
      loading="lazy"
      className={className}
      lqip={{ active: true, quality: 20 }}
    />
  );
};

export default Image;
