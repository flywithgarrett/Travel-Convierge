import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Axiom Concierge | Private Aviation & Lifestyle Management",
  description:
    "Axiom Concierge delivers unified lifestyle management — private aviation, global security, and bespoke itinerary architecture for discerning principals.",
  openGraph: {
    title: "Axiom Concierge",
    description:
      "Private aviation, global security, and bespoke itinerary architecture.",
    siteName: "Axiom Concierge",
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
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
