"use client";

import { useState, type ComponentProps } from "react";

type SafeImageProps = ComponentProps<"img"> & {
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
    <img
      {...props}
      alt={alt}
      src={imageSrc}
      onError={(event) => {
        onError?.(event);
        if (imageSrc !== fallbackSrc) {
          setImageSrc(fallbackSrc);
        }
      }}
    />
  );
}
