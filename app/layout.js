import { Sofia_Sans_Condensed } from 'next/font/google';
import './globals.css';

const sofia = Sofia_Sans_Condensed({
  subsets: ['latin'],
  variable: '--font-sofia',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // full control
});

export const metadata = {
  title: 'Omnitrix 10.7',
  description: 'Simulation of omnitrix',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#D0FF00" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#D0FF00" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <title>Omnitrix 10.7</title>
      </head>
      <body className={`${sofia.variable} font-sofia antialiased`}>
        {children}
      </body>
    </html>
  );
}
