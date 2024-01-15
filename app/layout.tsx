import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Header from "@/components/Header";

import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

config.autoAddCss = false
library.add(fas, far)

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <main className="min-h-screen flex flex-col items-center">
          <Header />

          <div className="flex-1 w-full flex flex-col items-center">
            {children}
          </div>

          <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
            <p>
              <span>🌴</span>
              {" "}
              <span> LowTechLabBdx</span>
              <span> ©️ 2024 </span>
            </p>
          </footer>
        </main>

      </body>
    </html>
  );
}
