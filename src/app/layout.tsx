import type { Metadata } from "next";
import { Outfit, Montserrat } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] })
const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Spotify",
  description: "Ouça música",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={outfit.className}>
        {children}
      </body>
    </html>
  )
}