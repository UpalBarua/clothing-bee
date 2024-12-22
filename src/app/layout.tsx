import { Navigation } from "@/components/navigation";

import "./globals.css";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
