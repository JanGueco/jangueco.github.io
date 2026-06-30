"use client";

import { useEffect, useState, type RefObject } from "react";

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function useSectionObserver(
  scrollRef: RefObject<HTMLElement | null>,
  sectionIds: string[]
) {
  const [activeSectionId, setActiveSectionId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const root = scrollRef.current;
    if (!root) return;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const ratios = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target.id, entry.intersectionRatio);
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });

        let bestId = sectionIds[0] ?? "";
        let bestRatio = 0;
        sectionIds.forEach((id) => {
          const ratio = ratios.get(id) ?? 0;
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });

        if (bestRatio > 0) {
          setActiveSectionId(bestId);
        }
      },
      {
        root,
        threshold: [0, 0.15, 0.35, 0.5, 0.75, 1],
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [scrollRef, sectionIds]);

  return { activeSectionId };
}

export function scrollToSection(
  scrollContainer: HTMLElement,
  sectionId: string
) {
  const section = document.getElementById(sectionId);
  if (!section) return;

  const targetTop =
    section.getBoundingClientRect().top -
    scrollContainer.getBoundingClientRect().top +
    scrollContainer.scrollTop;

  const startTop = scrollContainer.scrollTop;
  const distance = targetTop - startTop;
  const duration = 900;

  if (Math.abs(distance) < 2) return;

  let startTime: number | null = null;

  const step = (timestamp: number) => {
    if (startTime === null) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    scrollContainer.scrollTop = startTop + distance * easeInOutCubic(progress);
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
}
