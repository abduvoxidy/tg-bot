import Image from "next/image";

export default function CImage({ src, alt, objectFit }) {
  return (
    <Image
      src={src || "/images/bg-login.png"}
      alt={alt || "Alt text for the picture"}
      layout="fill"
      objectFit={objectFit || "cover"}
      quality={100}
    />
  );
}
