"use client";

import { useEffect } from "react";

export function ResumeBodyTheme() {
  useEffect(() => {
    document.documentElement.classList.add("resume-route");
    document.body.classList.add("resume-route");
    return () => {
      document.documentElement.classList.remove("resume-route");
      document.body.classList.remove("resume-route");
    };
  }, []);

  return null;
}
