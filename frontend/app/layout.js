import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import { Providers } from "./components/shared/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Geographic Diversity | Ethereum",
  description: "Explore geographic staking decentralization in Ethereum",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
