import type { Metadata } from "next";
import "./resume.css";
import { ResumeBodyTheme } from "./ResumeBodyTheme";

export const metadata: Metadata = {
  title: "Resume — Jan Gueco",
  description: "Print-ready resume",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ResumeBodyTheme />
      {children}
    </>
  );
}