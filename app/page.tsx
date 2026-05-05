import Image from "next/image";

const works = [
  {
    title: "YouTube Shorts",
    url: "https://www.youtube.com/embed/NdJpNp_WLg0",
  },
  {
    title: "TikTok",
    url: "https://www.youtube.com/embed/VIDEO_ID",
  },
];

export default function Home() {
  return (
    <main>

      {/* ヘッダー */}
      <header className="fixed top-0 left-0 w-full border-b bg-white/80 backdrop-blur z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

          <div className="flex items-center gap-2 font-bold text-lg">
            <Image src="/logo.jpg" alt="logo" width={36} height={36} />
            CHRONO SNAP
          </div>

          <a
            href="#contact"
            className="px-4 py-2 bg-black text-white rounded-lg"
          >
            無料相談
          </a>

        </div>
      </header>

      {/* ファーストビュー */}
      <section className="pt-32 pb-20 text-center px-6">
        <p className="text-sm tracking-widest text-gray-500 mb-4">
          VERTICAL VIDEO MARKETING
        </p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          広告じゃ売れない時代に。<br />
          売れるのは、縦型動画。
        </h1>

        <p className="text-gray-600 mb-8">
          SNS設計 × 動画制作で、採用・ブランディング・売上を動かす
        </p>

        <a
          href="#contact"
          className="px-6 py-3 bg-black text-white rounded-xl"
        >
          30分無料相談
        </a>
      </section>

      {/* 実績 */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">
          実績
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {works.map((work, i) => (
            <div key={i} className="aspect-video">
              <iframe
                src={work.url}
                className="w-full h-full rounded-xl"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </section>

      {/* 問い合わせ */}
      <section id="contact" className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          お問い合わせ
        </h2>

        <p className="mb-6 text-gray-600">
          お気軽にご相談ください
        </p>

        <a
          href="mailto:info@enable-studio.com"
          className="px-6 py-3 bg-black text-white rounded-xl"
        >
          メールで問い合わせる
        </a>
      </section>

    </main>
  );
}
