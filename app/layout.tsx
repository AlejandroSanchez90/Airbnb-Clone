import './globals.css';
import { Nunito } from 'next/font/google';

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone project',
};
const fonts = Nunito({ subsets: ['latin'] });
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={fonts.className}>{children}</body>
    </html>
  );
}
