import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";

const erstoria = localFont({ src: "../../public/fonts/erstoria.woff2", variable: "--font-erstoria" });
const justSans = localFont({ src: "../../public/fonts/JustSans-Regular.woff2", variable: "--font-justsans" });
const nordRegular = localFont({ src: "../../public/fonts/Nord-Regular.woff2", variable: "--font-nord" });
const nordThin = localFont({ src: "../../public/fonts/Nord-Thin.woff2", variable: "--font-nordthin" });
const optikaRegular = localFont({ src: "../../public/fonts/Optika-Regular.woff2", variable: "--font-optika" });
const optikaLight = localFont({ src: "../../public/fonts/Optika-Light.woff2", variable: "--font-optikalight" });

export const metadata: Metadata = {
  title: "0xpwns3c",
  description: "Hack The Planet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${erstoria.variable} ${justSans.variable} ${nordRegular.variable} ${nordThin.variable} ${optikaRegular.variable} ${optikaLight.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
