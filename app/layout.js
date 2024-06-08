import "./globals.css";
import "../public/fonts/Avant/stylesheet.css";
// import "../public/fonts/polysans/stylesheet.css";
import "../public/fonts/matter/stylesheet.css";
import { NextUIProvider } from "@nextui-org/react";
import Navbar from "./components/navbar";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextUIProvider>
          <Navbar />

          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
