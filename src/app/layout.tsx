import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
39;
import { Poppins } from "next/font/google";
import TanstackQueryProvider from "@/components/tanstack-query";

const BASE_URL = "https://decentroneum.com";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zeroloss.com"),
  title: {
    default: "Zeroloss",
    template: "%s | Zeroloss",
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "https://zeroloss/site.webmanifest",
  category: "Web 3",
  description: "Zeroloss",
  keywords: ["Web3", "Blockchain"],
  twitter: {
    card: "summary_large_image",
    title: "Zeroloss",
    creator: "@Zeroloss",
    description: "Zeroloss",
    images: ["/opengraph-image.png"],
  },
  openGraph: {
    title: "Zeroloss",
    description: "Zeroloss",
    url: BASE_URL,
    siteName: "Zeroloss",
    images: ["/opengraph-image.png"],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={poppins.className}>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange
        >
          <TanstackQueryProvider>{children}</TanstackQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
