import type { Metadata } from 'next';
import './globals.css';
import { LenisProvider } from '@/components/LenisProvider';

export const metadata: Metadata = {
  title: 'Sultan-e-Moazzam | Royal Brotherhood Experience',
  description: 'A digital palace celebrating a true friendship',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}