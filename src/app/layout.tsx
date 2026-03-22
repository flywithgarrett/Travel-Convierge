import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-inter",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "FlyWithGarrett | Private Aviation & Travel Concierge",
  description:
    "Elite travel concierge by Garrett Ray. Private aviation, global security, and bespoke itineraries crafted for those who refuse to travel ordinary.",
  openGraph: {
    title: "FlyWithGarrett | Private Aviation & Travel Concierge",
    description:
      "Elite travel concierge by Garrett Ray. Private aviation, global security, and bespoke itineraries.",
    siteName: "FlyWithGarrett",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} font-sans antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
