import { useState, useRef, useEffect } from "react";

// Improved BlurImage component
const BlurImage = ({ src, alt }: { src: string; alt: string }) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Check if image is already loaded (cached)
    if (imgRef.current?.complete) {
      setLoaded(true);
    }
  }, []);

  return (
    <div className="relative overflow-hidden">
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`block w-full h-auto transition-filter duration-500 ease-out ${
          loaded ? "blur-none" : "blur-xl"
        }`}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
      />
      {!loaded && <div className="absolute inset-0 bg-gray-100 -z-10" />}
    </div>
  );
};

export default BlurImage;
