import React from "react";
import Image from "next/legacy/image";
const Myimage = ({ src, className, alt, title, fit = "cover" }) => {
  return (
    <>
      {src && (
        <div className={className}>
          <Image
            layout="fill"
            objectFit={fit}
            src={src}
            alt={alt}
            title={title}
          />
        </div>
      )}
    </>
  );
};

export default Myimage;
