import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "craigslist hawaii",
  description: "Craigslist Hawaii homepage mockup recreated with React and Bootstrap 5",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
