"use client";

import type { ReactNode } from "react";

type V2CollapsiblePanelProps = {
  open: boolean;
  children: ReactNode;
  className?: string;
};

/** Keeps children in the DOM for crawlers; hides visually when closed. */
export function V2CollapsiblePanel({
  open,
  children,
  className = "",
}: V2CollapsiblePanelProps) {
  return (
    <div
      className={`v2-collapse-panel ${open ? "is-open" : ""} ${className}`.trim()}
      aria-hidden={open ? undefined : true}
    >
      <div className="v2-collapse-panel-inner">{children}</div>
    </div>
  );
}
