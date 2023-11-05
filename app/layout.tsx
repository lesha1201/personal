import '@/lib/ui/css/main.css';

import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google';

import { Header, PageContainer } from './components';
import { DESCRIPTION, FULL_NAME } from './config';
import { getMetadata } from './metadata';

const inter = Inter({ subsets: ['latin'] });

export const metadata = getMetadata({
  title: {
    template: `%s | ${FULL_NAME}`,
    default: FULL_NAME,
  },
  description: DESCRIPTION,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />

        <PageContainer>{children}</PageContainer>

        <Analytics />
      </body>
    </html>
  );
}
