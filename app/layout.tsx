import './globals.css';
import Navbar from './components/Navbar/Navbar';
import { Nunito } from 'next/font/google';
import ClientOnly from './components/ClientOnly';

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone project',
};
const fonts = Nunito({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={fonts.className}>
        <ClientOnly>
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
