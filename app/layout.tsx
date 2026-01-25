import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Your Name — Designer & Developer",
  description:
    "Personal website featuring projects, articles, and ways to get in touch.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Your Name — Designer & Developer",
    description:
      "Personal website featuring projects, articles, and ways to get in touch.",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen bg-background text-primaryDark">
        {children}
      </body>
    </html>
  );
}
