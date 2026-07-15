import { PortfolioShell } from "@/components/portfolio-shell";
import { portfolio } from "@/data/portfolio";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jasperhu.icu"),
  title: {
    default: `${portfolio.profile.name} | Portfolio`,
    template: `%s | ${portfolio.profile.name}`,
  },
  description:
    "Personal portfolio for AI, software engineering, research, projects, and writing.",
  openGraph: {
    title: `${portfolio.profile.name} | Portfolio`,
    description:
      "Personal portfolio for AI, software engineering, research, projects, and writing.",
    url: "https://jasperhu.icu",
    siteName: `${portfolio.profile.name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${portfolio.profile.name} | Portfolio`,
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PortfolioShell>{children}</PortfolioShell>
      </body>
    </html>
  );
}
