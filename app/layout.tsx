import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// 2. Configure your fonts
// Main body font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter", // We'll use this as a CSS variable
});

// Heading font
const jetbrains_mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"], // Load regular and bold weights
  display: "swap",
  variable: "--font-jetbrains-mono", // Our CSS variable for headings
});

export const metadata: Metadata = {
  title: "Micah Goodman",
  description: "Micah Goodman's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrains_mono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
