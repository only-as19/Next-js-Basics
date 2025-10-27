import "./globals.css"
import Navbar from '@/components/Navbar';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Roboto } from 'next/font/google';

const inter = Inter({subsets: ['latin']})
const roboto = Roboto({subsets: ['latin']})

 export const metaData: Metadata = {
  title: "Next JS",
  description: "It's a pratice for next js basics",
  keywords: "Next js, React js FrameWork"
 }
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}