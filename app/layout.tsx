import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Header from "@/components/Header";

import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import Footer from "@/components/Footer";

config.autoAddCss = false
library.add(fas, far)

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "LTLB Projet Tinyhouse",
  description: "Plateforme de mise en relations entre les differents acteurs autour du projet de tiny house lowtech",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <Header />
        </header>

        <main className="">
          <div className="container mx-auto flex flex-col items-center p-0 mb-2">
            {children}
          </div>

          <Footer />
        </main>
      </body>
    </html>
  );
}
