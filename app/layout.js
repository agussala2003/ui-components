import NavBar from "./Components/Nav"
import Footer from "./Components/Footer";
import styles from './page.module.css'
import { Inter_Tight } from "next/font/google";

const inter = Inter_Tight ({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: 'Components App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
      </head>
      <body className={`${styles.body} ${inter.className}`}>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
