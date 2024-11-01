import type { Metadata } from "next";
import "./globals.css";
import MainNav from "@/components/mainNav";
import { ThemeProvider } from "@/components/theme.provider";

export const metadata: Metadata = {
  title: "Ticketing Applicaation",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange>
          <nav className="flex flex-col items-center border-b">
            <div className="max-w-6xl w-full">
              <MainNav />
            </div>
          </nav>
          <main className="flex flex-col items-center">
            <div className="max-w-6xl w-full">{children}</div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
