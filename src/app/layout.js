import { Outfit} from "next/font/google";

import "./globals.css";

const outfit=Outfit({
   variable: "--font-outfit",
  subsets: ["latin"],
})


export const metadata = {
  title: "Blogger",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable}`}>
      
      <body
        className={`${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
