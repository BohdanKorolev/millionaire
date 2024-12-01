import type { Metadata } from 'next';
import '../common/styles/main.scss';
import { JSX } from 'react';
import { GameProvider } from '@/common/context/GameContext';
import { Inter } from 'next/font/google';

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
