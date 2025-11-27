// app/layout.tsx
import './globals.css';
import Script from 'next/script';
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
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            (function() {
              try {
                var theme = localStorage.getItem('theme');
                var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
                var shouldDark = theme === 'dark' || (!theme && prefersDark);
                var el = document.documentElement;
                if (shouldDark) {
                  if (!el.classList.contains('dark')) el.classList.add('dark');
                  el.style.colorScheme = 'dark';
                } else {
                  el.style.colorScheme = 'light';
                }
              } catch (e) {}
            })();
          `}
        </Script>
      </head>

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
