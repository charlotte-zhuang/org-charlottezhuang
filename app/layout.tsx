import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import RootHeader from "@/components/root-header";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "charlotte",
  description: "charlotte's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col items-center">
            <div className="max-w-3xl">
              <RootHeader />
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
