import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Kreww — Your team, together.',
    template: '%s | Kreww',
  },
  description:
    'Stop running your business in WhatsApp groups. Kreww gives your remote team a professional virtual office — one place to work, collaborate, and grow.',
  metadataBase: new URL('https://mykreww.com'),
  openGraph: {
    title: 'Kreww — Your team, together.',
    description:
      'A real virtual office for remote teams. Built in Africa, for the world.',
    url: 'https://mykreww.com',
    siteName: 'Kreww',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kreww — Your team, together.',
    description: 'A real virtual office for remote teams.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
