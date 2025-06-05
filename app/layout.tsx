import "./ui/globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { inconsolata } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Vineela Sridhara | Senior Software Engineer",
  description: "My technical website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth dark:bg-slate-90 ${inconsolata.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
