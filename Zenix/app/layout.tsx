import "@/styles/globals.css";
import { Metadata } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";
import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";


import { UserProvider } from "@/contexts/UserContexts";
import  Footer  from "@/components/Footer";


export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          {/* Wrap the entire layout with UserProvider */}
          <UserProvider>
            <div className="relative flex flex-col h-screen">
              <Navbar />
              <main className="w-full flex-1">
                {children}
              </main>
              <Footer/>
            </div>
          </UserProvider>
        </Providers>
      </body>
    </html>
  );
}
