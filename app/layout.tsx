import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chrono Snap | 縦型動画マーケティング',
  description: 'プロ品質 × SNS設計で、採用・ブランド・売上を動かす縦型動画マーケティング。',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ja"><body>{children}</body></html>;
}
