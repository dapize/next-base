import type { Metadata } from "next";
import { ThemeProvider } from "@/theme";

export const metadata: Metadata = {
  title: "Create Next App 2",
  description: "Generated by create next app 2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
}
