"use client";

import { useCallback, useRef, useState } from "react";
import { Maximize2 } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";
import {
  isAnimatedImage,
  isReplayableMedia,
  isVideoMedia,
  withCacheBust,
} from "@/lib/media-utils";

type V2LazyImageProps = {
  src: string;
  alt: string;
  className?: string;
  onEnlarge?: (src: string) => void;
};

export function V2LazyImage({
  src,
  alt,
  className = "",
  onEnlarge,
}: V2LazyImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [imageSrc, setImageSrc] = useState(() => withCacheBust(src, "0"));
  const videoRef = useRef<HTMLVideoElement>(null);

  const markLoaded = useCallback(() => setLoaded(true), []);

  const replay = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      if (isVideoMedia(src)) {
        const video = videoRef.current;
        if (!video) return;
        video.currentTime = 0;
        void video.play();
        return;
      }
      if (isAnimatedImage(src)) {
        setLoaded(false);
        setImageSrc(withCacheBust(src));
      }
    },
    [src]
  );

  const handleEnlarge = useCallback(() => {
    onEnlarge?.(src);
  }, [onEnlarge, src]);

  const mediaClassName = `${className} v2-lazy-image ${
    loaded ? "is-loaded" : ""
  }`;

  return (
    <div className="v2-lazy-image-wrap">
      {!loaded && !error && (
        <div className="v2-image-spinner" aria-hidden="true">
          <Spinner className="size-8 text-white/40" />
        </div>
      )}
      {error ? (
        <div className="v2-image-error text-sm text-[#737373] py-8">
          Preview unavailable
        </div>
      ) : isVideoMedia(src) ? (
        <>
          <video
            ref={videoRef}
            src={src}
            controls
            loop
            playsInline
            className={mediaClassName}
            onLoadedData={markLoaded}
            onError={() => setError(true)}
          />
          {loaded && isReplayableMedia(src) && (
            <button
              type="button"
              className="v2-media-replay"
              onClick={replay}
            >
              Replay
            </button>
          )}
          {loaded && onEnlarge && (
            <button
              type="button"
              className="v2-media-expand"
              onClick={handleEnlarge}
              aria-label={`Expand ${alt}`}
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          )}
        </>
      ) : (
        <>
          <img
            src={imageSrc}
            alt={alt}
            loading="lazy"
            className={`${mediaClassName} ${onEnlarge ? "cursor-zoom-in" : ""}`}
            onLoad={markLoaded}
            onError={() => setError(true)}
            onClick={loaded && onEnlarge ? handleEnlarge : undefined}
            onKeyDown={
              onEnlarge
                ? (e) => {
                    if (loaded && (e.key === "Enter" || e.key === " ")) {
                      e.preventDefault();
                      handleEnlarge();
                    }
                  }
                : undefined
            }
            tabIndex={onEnlarge && loaded ? 0 : undefined}
            role={onEnlarge && loaded ? "button" : undefined}
          />
          {loaded && isAnimatedImage(src) && (
            <button
              type="button"
              className="v2-media-replay"
              onClick={replay}
            >
              Replay
            </button>
          )}
        </>
      )}
    </div>
  );
}
