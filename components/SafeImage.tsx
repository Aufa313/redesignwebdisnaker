"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type SafeImageProps = ImageProps & {
  fallbackSrc?: string;
};

const defaultFallbackSrc = "/asset/images.jpg";

export default function SafeImage({
  fallbackSrc = defaultFallbackSrc,
  onError,
  src,
  alt,
  ...props
}: SafeImageProps) {
  const [imageSrc, setImageSrc] = useState(src);

  return (
    <Image
      {...props}
      alt={alt}
      src={imageSrc}
      width={props.width ?? 1600}
      height={props.height ?? 900}
      onError={(event) => {
        onError?.(event);
        if (imageSrc !== fallbackSrc) {
          setImageSrc(fallbackSrc);
        }
      }}
    />
  );
}
