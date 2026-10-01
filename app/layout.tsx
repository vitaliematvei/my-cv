import type { Metadata } from 'next';
import CustomCursor from '@/components/CustomCursor';

import './globals.css';

export const metadata: Metadata = {
  title: 'Vitalie Matvei | Frontend Developer',
  description: 'Personal CV and portfolio of Vitalie Matvei.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <CustomCursor />
      </body>
    </html>
  );
}
