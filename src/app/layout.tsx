import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Huda Nugraha | QA Automation Engineer",
  description: "Portfolio of Muhammad Huda Nugraha - QA Automation Engineer specializing in Test Automation, Mobile Testing, Appium, Maestro, and CI/CD.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${jetbrainsMono.variable} min-h-screen bg-background font-sans text-foreground flex flex-col antialiased selection:bg-primary/20`}
      >
        <div className="fixed inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#1e1b4b_100%)]"></div>
        {children}
      </body>
    </html>
  );
}
