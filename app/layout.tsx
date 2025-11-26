import './globals.css';
import { Roboto } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Providers } from './providers';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata = {
  title: 'Portfolio',
  description: 'Modern portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className="font-sans bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Providers>
          <Header />
          <main className="min-h-screen pt-20">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
