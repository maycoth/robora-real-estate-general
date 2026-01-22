import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://roborafinancial.com";
const siteName = "Robora Financial";
const siteDescription = "Turn idle cash into earning assets. Robora Financial helps commercial real estate firms earn up to 3.11% APY on operating capital, reserves, and excess funds—with tens of millions in FDIC coverage.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Robora Financial - Turn Idle Cash Into Earning Assets",
    template: "%s | Robora Financial",
  },
  description: siteDescription,
  keywords: [
    "commercial real estate",
    "cash management",
    "FDIC insured",
    "operating capital",
    "operating accounts",
    "reserve funds",
    "high yield savings",
    "real estate cash management",
    "CRE finance",
    "treasury management",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteName,
    title: "Robora Financial - Turn Idle Cash Into Earning Assets",
    description: siteDescription,
    // images: [
    //   {
    //     url: "/og-image.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "Robora Financial - Turn Idle Cash Into Earning Assets",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Robora Financial - Turn Idle Cash Into Earning Assets",
    description: siteDescription,
    // images: ["/og-image.png"],
    creator: "@roborafinancial",
  },
  // icons: {
  //   icon: "/favicon.ico",
  //   shortcut: "/favicon-16x16.png",
  //   apple: "/apple-touch-icon.png",
  // },
  // manifest: "/site.webmanifest",
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="29262e1d-6af1-47bb-ade3-3c354d057c65"
        />
        {children}
        <VisualEditsMessenger />

        {/* LinkedIn Insight Tag */}
        <Script id="linkedin-partner" strategy="afterInteractive">
          {`
            _linkedin_partner_id = "9237617";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          `}
        </Script>
        <Script id="linkedin-insight" strategy="afterInteractive">
          {`
            (function(l) {
              if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
              window.lintrk.q=[]}
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);
            })(window.lintrk);
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://px.ads.linkedin.com/collect/?pid=9237617&fmt=gif"
          />
        </noscript>
      </body>
    </html>
  );
}
