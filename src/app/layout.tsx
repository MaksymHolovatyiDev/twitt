import '@sass/index.scss';
import type { Metadata } from 'next';
import { Tomorrow } from 'next/font/google';

import ReduxProvider from '@Providers/ReduxProvider';

const inter = Tomorrow({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Twiit',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
