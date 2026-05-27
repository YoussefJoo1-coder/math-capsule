import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Math Capsule",
  description: "Platform"
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}