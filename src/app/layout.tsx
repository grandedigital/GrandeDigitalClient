// import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "@/components/header";
import MobilMenu from "@/components/mobilMenu";
import { MenuProvider } from "../context/MenuContext";
import ScrollProgres from "@/components/scrollProgres";
import Footer from "@/components/footer";

// export const metadata: Metadata = {
//   title: "Grande Digital",
//   description: "Dijital Yazılım Ajansı",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        <MenuProvider>
          <Header />
          <div style={{ overflow: "hidden" }}>{children}</div>

          <MobilMenu />
          <ScrollProgres />
          <Footer />
        </MenuProvider>
      </body>
    </html>
  );
}
