import "./globals.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Montserrat, Barlow_Condensed, Zilla_Slab } from "next/font/google";

const barlow = Barlow_Condensed({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-barlow",
  subsets: ["latin"],
  display: "swap",
});

const mont = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mont",
  subsets: ["latin"],
  display: "swap",
});

const zilla = Zilla_Slab({
  weight: ["400", "700"],
  variable: "--font-zilla",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Royal Seoul House",
  description:
    "Enjoy authentic Korean BBQ at Royal Seoul House. Offering a traditional Korean dining experience with a variety of BBQ and side dishes.",
  keywords: ["Korean BBQ", "Vancouver restaurant", "authentic Korean food"],
  openGraph: {
    title: "Royal Seoul House",
    description: "Authentic Korean BBQ in the heart of Vancouver.",
    url: "https://royalseoulhouse.com",
    siteName: "Royal Seoul House",
    images: [
      {
        url: "https://rsh-mnpyhg996-aakashkathaits-projects.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage%20(53).2698f5c9.jpg&w=640&q=75",
        width: 800,
        height: 600,
      },
    ],

    locale: "en_CA",
    type: "website",
  },
  place: {
    location: {
      latitude: 49.264,
      longitude: -123.132,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      data-theme="coffee"
      lang="en"
      className={`${mont.variable} ${barlow.variable} ${zilla.variable}`}
    >
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
