import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Trend Track",
  description: "Keep track of which repos are trending",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-white flex min-h-screen">
        {children}
      </body>
    </html>
  );
}
