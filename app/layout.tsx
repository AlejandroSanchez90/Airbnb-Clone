import './globals.css';
import Navbar from './components/Navbar/Navbar';
import { Nunito } from 'next/font/google';
import ClientOnly from './components/ClientOnly';
import RegisterModal from './components/Modals/RegisterModal';
import ToasterProvider from './providers/ToasterProvider';
import LoginModal from './components/Modals/LoginModal';
import { getCurrentUser } from './actions/getCurrentUser';

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone project',
};
const fonts = Nunito({ subsets: ['latin'] });

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const currentUser = await getCurrentUser();
  return (
    <html lang='en'>
      <body className={fonts.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
