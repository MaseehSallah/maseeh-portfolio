
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Maseeh Sallah | Programmer & Data Scientist",

  description:
    "Explore the portfolio of Maseeh Sallah, a programmer and aspiring data scientist specializing in Python, data analytics, artificial intelligence, machine learning, and software development.",

  applicationName: "Maseeh Sallah Portfolio",

  keywords: [
    "Maseeh Sallah",
    "Maseeh Sallah Portfolio",
    "Programmer",
    "Data Scientist",
    "Python Developer",
    "Data Analytics",
    "Power BI",
    "Machine Learning",
    "Artificial Intelligence",
    "Software Development",
  ],

  authors: [{ name: "Maseeh Sallah" }],

  creator: "Maseeh Sallah",

  robots: {
  index: false,
  follow: false,
  googleBot: {
    index: false,
    follow: false,
  },
},
};


export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
