import localFont from "next/font/local";
import "./globals.css";

const poppins = localFont({
  src: "../font/Poppins-Regular.ttf",
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}