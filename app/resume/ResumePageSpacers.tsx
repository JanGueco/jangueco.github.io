"use client";

import { useLayoutEffect } from "react";

const SPACER_CLASS = "resume-page-spacer";

function measurePageContentHeight(sheet: HTMLElement): number {
  const probe = document.createElement("div");
  probe.style.cssText =
    "position:absolute;visibility:hidden;height:267mm;width:1px;pointer-events:none;";
  sheet.appendChild(probe);
  const height = probe.offsetHeight;
  probe.remove();
  return height;
}

function getBreakableElements(sheet: HTMLElement): HTMLElement[] {
  const nodes: HTMLElement[] = [];
  const header = sheet.querySelector<HTMLElement>(".resume-header");
  if (header) nodes.push(header);

  sheet.querySelectorAll<HTMLElement>(".resume-section").forEach((section) => {
    if (
      section.classList.contains("resume-section-skills") ||
      section.classList.contains("resume-section-projects")
    ) {
      return;
    }

    const bar = section.querySelector<HTMLElement>(".resume-section-bar");
    if (bar) nodes.push(bar);

    section
      .querySelectorAll<HTMLElement>(
        ".resume-about, .resume-entry, .resume-skills-grid, .resume-project, .resume-education-placeholder"
      )
      .forEach((el) => nodes.push(el));
  });

  return nodes;
}

function clearSpacers(sheet: HTMLElement) {
  sheet.querySelectorAll(`.${SPACER_CLASS}`).forEach((el) => el.remove());
}

function insertSpacers(sheet: HTMLElement) {
  clearSpacers(sheet);

  if (window.matchMedia("print").matches) return;

  const pageMax = measurePageContentHeight(sheet);
  if (pageMax <= 0) return;

  const breakables = getBreakableElements(sheet);
  let usedOnPage = 0;

  for (const el of breakables) {
    const style = window.getComputedStyle(el);
    const margin =
      parseFloat(style.marginTop) + parseFloat(style.marginBottom);
    const blockHeight = el.offsetHeight + margin;

    if (usedOnPage > 0 && usedOnPage + blockHeight > pageMax) {
      const spacer = document.createElement("div");
      spacer.className = `${SPACER_CLASS} resume-no-print`;
      spacer.setAttribute("aria-hidden", "true");
      el.parentNode?.insertBefore(spacer, el);
      usedOnPage = blockHeight;
    } else {
      usedOnPage += blockHeight;
    }
  }
}

export function ResumePageSpacers({ sheetId }: { sheetId: string }) {
  useLayoutEffect(() => {
    const sheet = document.getElementById(sheetId);
    if (!sheet) return;

    const run = () => insertSpacers(sheet);

    run();

    const observer = new ResizeObserver(() => {
      window.requestAnimationFrame(run);
    });
    observer.observe(sheet);

    window.addEventListener("resize", run);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", run);
      clearSpacers(sheet);
    };
  }, [sheetId]);

  return null;
}
