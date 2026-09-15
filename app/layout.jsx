import "./globals.css";
import { Raleway } from 'next/font/google';
import { Audiowide } from 'next/font/google';

const mainFont = Raleway({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-main',
});

const logoFont = Audiowide({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-logo',
});

export const metadata = {
  title: "Watch Dog",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    >
      <body className={`${mainFont.variable} ${logoFont.variable}`}>{children}
        
      </body>
    </html>
  );
}
