import React from "react";

export default function Home() {
  return (
    <main className="bg-white text-[#111]">

      {/* ヘッダー */}
      <header className="fixed top-0 left-0 w-full border-b border-black/10 bg-white/90 backdrop-blur z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          
          {/* ロゴ（確実に表示） */}
          <div className="flex items-center gap-2 font-bold text-lg">
            <img src="/logo.jpg" alt="logo" style={{ height: 40 }} />
            CHRONO SNAP
          </div>

          <a
            href="mailto:info@enable-studio.com"
            className="px-5 py-2 bg-black text-white rounded-full text-sm font-bold"
          >
            無料相談
          </a>

        </div>
      </header>

      {/* ファーストビュー */}
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-6xl mx-auto">

          <p className="text-sm tracking-[0.3em] text-gray-500 mb-6">
            VERTICAL VIDEO MARKETING
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-[-0.02em] mb-8">
            採用も、ブランドも、売上も。<br />
            縦型動画で動かす。
          </h1>

          <p className="text-lg leading-[1.9] text-black/60 max-w-2xl mb-10">
            Chrono Snapは、TikTok / Instagram Reels / YouTube Shortsを活用し、
            企業の魅力を“伝わる動画”に変える縦型動画マーケティング支援です。
            企画・撮影・編集・投稿設計・分析改善まで伴走します。
          </p>

          <div className="flex gap-4">
            <a
              href="mailto:info@enable-studio.com"
              className="px-8 py-4 bg-black text-white rounded-full font-bold"
            >
              30分無料相談する
            </a>

            <a
              href="#works"
              className="px-8 py-4 border border-black/20 rounded-full font-bold"
            >
              実績を見る
            </a>
          </div>

        </div>
      </section>

      {/* 強み */}
      <section className="bg-gray-50 py-20 px-6 border-y border-black/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-black mb-4">企画から運用まで</h3>
            <p className="text-black/60 leading-8">
              投稿ネタで止まらず、目的から逆算して継続運用。
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-black mb-4">プロ品質の制作</h3>
            <p className="text-black/60 leading-8">
              撮影・照明・音声・構成まで、企業ブランドを損なわない品質。
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-black mb-4">分析改善まで伴走</h3>
            <p className="text-black/60 leading-8">
              投稿して終わりではなく、数字を見ながら改善。
            </p>
          </div>

        </div>
      </section>

      {/* 実績 */}
      <section id="works" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-black mb-12">
            制作実績
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <a href="https://youtube.com/shorts/NdJpNp_WLg0" target="_blank">
              <img src="https://img.youtube.com/vi/NdJpNp_WLg0/hqdefault.jpg" className="rounded-xl" />
            </a>

            <a href="https://youtube.com/shorts/_XeSLnKg77o" target="_blank">
              <img src="https://img.youtube.com/vi/_XeSLnKg77o/hqdefault.jpg" className="rounded-xl" />
            </a>

            <a href="https://youtube.com/shorts/AML94lBtwaM" target="_blank">
              <img src="https://img.youtube.com/vi/AML94lBtwaM/hqdefault.jpg" className="rounded-xl" />
            </a>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center border-t">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-4xl font-black mb-6">
            まずはご相談ください
          </h2>

          <p className="text-black/60 mb-10">
            採用・PR・売上改善、目的に合わせて最適な設計をご提案します。
          </p>

          <a
            href="mailto:info@enable-studio.com"
            className="px-10 py-5 bg-black text-white rounded-full font-bold"
          >
            info@enable-studio.com に相談する
          </a>

        </div>
      </section>

    </main>
  );
}
