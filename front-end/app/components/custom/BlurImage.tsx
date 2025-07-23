import { useState, useRef, useEffect } from "react";
import type { ImgHTMLAttributes } from "react";
import { cn } from "~/lib/utils";

type BlurImageProps = ImgHTMLAttributes<HTMLImageElement>;

const BlurImage = ({ className = "", ...props }: BlurImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete) {
      setLoaded(true);
    }
  }, []);

  return (
    <div className="relative overflow-hidden">
      <img
        ref={imgRef}
        className={cn(
          "block w-full h-auto transition-filter duration-500 ease-out",
          loaded ? "blur-none" : "blur-xl",
          className
        )}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        {...props}
      />
      {/* {!loaded && <div className="absolute inset-0 bg-gray-100 -z-10" />} */}
    </div>
  );
};

export default BlurImage;
