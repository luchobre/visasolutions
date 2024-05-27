import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const roboto = Roboto({ subsets: ["latin"], weight: '300' });

export const metadata: Metadata = {
  title: "Visa Solutions Workforce",
  description: "Created by Luciano Bregoli",
  icons: {
    icon:'/favicon.ico'
  } 
};

export default function RootLayout({children}: 
  Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>
        {children}
        </Providers>
        </body>
    </html>
  );
}
