"use client";

export function ResumePrintButton() {
  return (
    <div className="resume-screen-toolbar resume-no-print">
      <button type="button" onClick={() => window.print()}>
        Print / Save as PDF
      </button>
      <span style={{ fontSize: "0.75rem", color: "#666", alignSelf: "center" }}>
        Save as PDF · Margins: None · Backgrounds on · Links stay clickable
      </span>
    </div>
  );
}
