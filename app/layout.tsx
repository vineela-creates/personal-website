import "./ui/globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { inconsolata } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Vineela Sridhara | Senior Software Engineer",
  description:
    "Senior Software Engineer passionate about building impactful web and mobile applications. Specializing in full-stack development, event-driven architectures, and cloud solutions.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Spring Boot",
    "Azure",
    "Portfolio",
  ],
  authors: [{ name: "Vineela Sridhara" }],
  openGraph: {
    title: "Vineela Sridhara | Senior Software Engineer",
    description:
      "Senior Software Engineer passionate about building impactful web and mobile applications",
    url: "https://vineelasridhara.com",
    siteName: "Vineela Sridhara Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${inconsolata.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
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
