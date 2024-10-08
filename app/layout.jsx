import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rutambhara",
  description: "Product Designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Head>
      <link rel="icon" href="icon.png" sizes="any" />
      </Head>
    </html>
  );
}
