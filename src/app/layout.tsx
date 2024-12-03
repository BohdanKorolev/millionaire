import type { Metadata } from 'next';
import '@/styles/main.scss';
import { JSX } from 'react';
import { Inter } from 'next/font/google';
import { GameProvider } from '@/contexts/game.context';

export const metadata: Metadata = {
  title: 'Who wants to be a millionaire?',
  description: 'This project was developed as a test case.',
};

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body>
        <main className={inter.className}>
          <GameProvider>{children}</GameProvider>
        </main>
      </body>
    </html>
  );
}
