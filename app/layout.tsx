import './globals.css';

export const metadata = {
  title: 'Chrono Snap',
  description: 'Vertical Video Marketing',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="bg-white text-black">{children}</body>
    </html>
  );
}
