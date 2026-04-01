import Image from "next/image";

export default function Icon({ name, size = 24, alt = "icon", className = "" }) {
  return (
    <Image
      src={`/icons/${name}.png`}
      alt={alt}
      width={size}
      height={size}
      className={className}
    />
  );
}