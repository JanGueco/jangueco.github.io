"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Spinner } from "@/components/ui/spinner";
import {
  isAnimatedImage,
  isVideoMedia,
  withCacheBust,
} from "@/lib/media-utils";

type V2ImageLightboxProps = {
  src: string | null;
  alt: string;
  openKey?: number;
  onClose: () => void;
};

export function V2ImageLightbox({
  src,
  alt,
  openKey = 0,
  onClose,
}: V2ImageLightboxProps) {
  const reduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const displaySrc =
    src && isAnimatedImage(src) ? withCacheBust(src, openKey) : src;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!src) return;
    setLoaded(false);
  }, [src, openKey]);

  useEffect(() => {
    if (!src) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [src, onClose]);

  useEffect(() => {
    if (!src) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [src]);

  useEffect(() => {
    if (!src || !isVideoMedia(src)) return;
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    void video.play().catch(() => {});
  }, [src, openKey]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {src && (
        <motion.div
          className="v2-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.25 }}
          onClick={onClose}
        >
          <button
            type="button"
            className="v2-lightbox-close"
            onClick={onClose}
            aria-label="Close preview"
          >
            <X className="w-5 h-5" />
          </button>
          <div
            className="v2-lightbox-media-wrap"
            onClick={(e) => e.stopPropagation()}
          >
            {!loaded && (
              <div className="v2-lightbox-spinner" aria-hidden="true">
                <Spinner className="size-10 text-white/50" />
              </div>
            )}
            {isVideoMedia(src) ? (
              <motion.video
                key={`${src}-${openKey}`}
                ref={videoRef}
                src={src}
                controls
                loop
                autoPlay
                muted
                playsInline
                className={`v2-lightbox-video ${loaded ? "is-loaded" : ""}`}
                initial={reduceMotion ? false : { scale: 0.92, opacity: 0 }}
                animate={reduceMotion ? undefined : { scale: 1, opacity: 1 }}
                exit={reduceMotion ? undefined : { scale: 0.92, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
                onLoadedData={() => setLoaded(true)}
              />
            ) : (
              <motion.img
                key={`${src}-${openKey}`}
                src={displaySrc ?? src}
                alt={alt}
                className={`v2-lightbox-image ${loaded ? "is-loaded" : ""}`}
                initial={reduceMotion ? false : { scale: 0.92, opacity: 0 }}
                animate={reduceMotion ? undefined : { scale: 1, opacity: 1 }}
                exit={reduceMotion ? undefined : { scale: 0.92, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
                onLoad={() => setLoaded(true)}
              />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
