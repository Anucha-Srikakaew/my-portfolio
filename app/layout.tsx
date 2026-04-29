import type { Metadata } from "next";
import { Fraunces, Geist } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Anucha Srilakaew | System Engineer & Full Stack Developer",
  description:
    "Portfolio of Anucha Srilakaew, System Engineer at Astemo Chonburi Powertrain Ltd. focused on Infor SyteLine ERP, Power Platform, SQL Server, automation, and internal web applications.",
  keywords: [
    "Anucha Srilakaew",
    "System Engineer",
    "Full Stack Developer",
    "ERP Integration",
    "Infor SyteLine",
    "Power Platform",
    "Power Automate",
    "Power Apps",
    "SQL Server",
    "ASP.NET Core",
    "React",
    "Node.js",
    "TypeScript",
    "Astemo Chonburi Powertrain",
    "Chonburi",
    "Bangkok",
    "Rayong",
  ],
  openGraph: {
    title: "Anucha Srilakaew | Portfolio",
    description: "System Engineer focused on ERP, Power Platform, SQL Server, and internal automation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} ${fraunces.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
