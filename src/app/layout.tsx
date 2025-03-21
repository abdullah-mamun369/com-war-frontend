import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Comilla Warriors",
  description: "Official website of Comilla Warriors Cricket Club",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
