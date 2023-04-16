import Image from "next/image";

const MyImage = ({ src, alt, priority, fill, className }) => {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        priority={priority}
        fill={fill}
        className={className}
      />
    </>
  );
};

export default MyImage;
