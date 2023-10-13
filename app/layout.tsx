import '@/lib/ui/css/main.css';

import { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Header, PageContainer } from './components';
import { DESCRIPTION, FULL_NAME } from './config';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  ),
  title: {
    template: `%s | ${FULL_NAME}`,
    default: FULL_NAME,
  },
  description: DESCRIPTION,
  openGraph: {
    title: {
      template: `%s | ${FULL_NAME}`,
      default: FULL_NAME,
    },
    description: DESCRIPTION,
  },
};

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
      </body>
    </html>
  );
}
