const works = [
  { platform: 'YouTube Shorts', category: 'Branding / PR', url: 'https://youtube.com/shorts/NdJpNp_WLg0' },
  { platform: 'YouTube Shorts', category: 'Branding / PR', url: 'https://youtube.com/shorts/_XeSLnKg77o' },
  { platform: 'YouTube Shorts', category: 'Product / PR', url: 'https://youtube.com/shorts/AML94lBtwaM' },
  { platform: 'TikTok', category: 'Shop / PR', url: 'https://www.tiktok.com/@tgap_tokyo/video/7595705882155977992' },
  { platform: 'Instagram', category: 'Account / Branding', url: 'https://www.instagram.com/megasportsjpn/' },
  { platform: 'YouTube Shorts', category: 'Corporate Channel', url: 'https://www.youtube.com/@%E5%BB%BA%E3%83%87%E3%83%9D%E5%85%AC%E5%BC%8F%E3%83%81%E3%83%A3%E3%83%B3%E3%83%8D%E3%83%AB/shorts' },
];

const services = [
  {
    num: '01',
    title: '縦型動画マーケティング',
    text: 'TikTok / Instagram Reels / YouTube Shortsに最適化した企画・制作・運用。',
  },
  {
    num: '02',
    title: '採用 / ブランディング支援',
    text: '企業の魅力・人・現場を伝え、応募・認知・信頼につなげる設計。',
  },
  {
    num: '03',
    title: 'TikTok Shop / インフルエンサー',
    text: 'テストパートナー企業を募集。販売導線と発信者活用まで伴走。',
  },
];

const process = ['ヒアリング', '設計', '撮影', '編集', '投稿', '分析改善'];

export default function Home() {
  return (
    <main className="bg-[#030303] text-white overflow-hidden">
      <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="text-sm font-black tracking-[0.32em]">
            CHRONO <span className="text-cyan-300">SNAP</span>
          </div>
          <a href="#contact" className="hidden rounded-full border border-cyan-300/40 px-5 py-2 text-sm font-bold text-cyan-200 transition hover:bg-cyan-300 hover:text-black md:block">
            無料相談
          </a>
        </div>
      </header>

      <section className="relative flex min-h-screen items-center justify-center px-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(0,229,255,0.22),transparent_32%),linear-gradient(to_bottom,#030303,#050505,#030303)]" />
        <div className="relative z-10 mx-auto max-w-5xl pt-24">
          <p className="mb-8 text-xs font-bold tracking-[0.5em] text-cyan-300">
            VERTICAL VIDEO MARKETING
          </p>
          <h1 className="mb-8 text-5xl font-black leading-tight tracking-tight md:text-7xl">
            広告じゃ売れない時代に。<br />
            <span className="text-cyan-300">売れるのは、縦型動画。</span>
          </h1>
          <p className="mx-auto mb-12 max-w-2xl text-lg leading-8 text-white/65 md:text-xl">
            プロ品質 × SNS設計で、採用・ブランド・売上を動かす
            縦型動画マーケティング。
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a href="#contact" className="rounded-full bg-cyan-300 px-8 py-4 font-bold text-black transition hover:scale-105">
              30分無料相談
            </a>
            <a href="#works" className="rounded-full border border-white/20 px-8 py-4 font-bold text-white transition hover:border-cyan-300 hover:text-cyan-300">
              実績を見る
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 max-w-3xl">
            <p className="mb-4 text-xs font-bold tracking-[0.4em] text-cyan-300">PROBLEM</p>
            <h2 className="text-4xl font-black leading-tight md:text-6xl">
              SNS運用、<br />作るだけで止まっていませんか？
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {['何を投稿すればいいかわからない', '動画を作っても成果につながらない', '採用やブランドの魅力が伝わらない', '運用が続かない'].map((item) => (
              <div key={item} className="min-h-[150px] border border-white/10 bg-white/[0.03] p-6 text-lg font-bold leading-8 text-white/75">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-4 text-xs font-bold tracking-[0.4em] text-cyan-300">DIFFERENCE</p>
            <h2 className="text-4xl font-black md:text-6xl">なぜ、結果が変わるのか</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              ['プロ品質 × SNS最適化', '撮影・照明・音声・構成をSNS文脈へ落とし込み、視聴維持率を設計。'],
              ['勝てるフォーマットを構築', 'フック違い・訴求違いを試し、データをもとに改善。'],
              ['BtoB企業に強い信頼感', 'ブランドを損なわない品質で、採用・広報・販促に使える動画へ。'],
            ].map(([title, text]) => (
              <div key={title} className="group border border-white/10 bg-white/[0.03] p-8 transition hover:-translate-y-2 hover:border-cyan-300/50">
                <h3 className="mb-5 text-2xl font-black">{title}</h3>
                <p className="leading-8 text-white/60">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-xs font-bold tracking-[0.4em] text-cyan-300">SERVICE</p>
          <h2 className="mb-16 text-4xl font-black md:text-6xl">サービス</h2>
          <div className="grid gap-6">
            {services.map((s) => (
              <div key={s.num} className="grid gap-6 border-t border-white/10 py-10 md:grid-cols-[120px_1fr_1.3fr] md:items-center">
                <div className="text-5xl font-black text-cyan-300/70">{s.num}</div>
                <h3 className="text-3xl font-black">{s.title}</h3>
                <p className="text-lg leading-8 text-white/60">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="works" className="border-t border-white/10 px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs font-bold tracking-[0.4em] text-cyan-300">WORKS</p>
              <h2 className="text-4xl font-black md:text-6xl">制作実績</h2>
            </div>
            <p className="max-w-xl leading-8 text-white/60">
              YouTube Shorts / TikTok / Instagram Reelsなど、各媒体に最適化したショート動画制作・運用を支援。
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {works.map((w, i) => (
              <a key={w.url} href={w.url} target="_blank" rel="noreferrer" className="group block overflow-hidden border border-white/10 bg-white/[0.03] transition hover:-translate-y-2 hover:border-cyan-300/50">
                <div className="flex aspect-[9/14] items-center justify-center bg-[radial-gradient(circle_at_50%_20%,rgba(0,229,255,0.2),transparent_35%),#090909]">
                  <span className="text-7xl font-black text-white/10">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="p-6">
                  <p className="mb-2 text-sm font-bold text-cyan-300">{w.platform}</p>
                  <h3 className="mb-6 text-2xl font-black">{w.category}</h3>
                  <p className="text-sm font-bold text-white/60 group-hover:text-cyan-300">詳しく見る →</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-xs font-bold tracking-[0.4em] text-cyan-300">PROCESS</p>
          <h2 className="mb-16 text-4xl font-black md:text-6xl">運用フロー</h2>
          <div className="grid gap-4 md:grid-cols-6">
            {process.map((p, i) => (
              <div key={p} className="border border-white/10 bg-white/[0.03] p-6">
                <p className="mb-8 text-xs font-bold text-cyan-300">STEP {i + 1}</p>
                <h3 className="text-xl font-black">{p}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-36 text-center">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 px-8 py-20">
          <p className="mb-5 text-xs font-bold tracking-[0.4em] text-cyan-300">CONTACT</p>
          <h2 className="mb-8 text-4xl font-black leading-tight md:text-6xl">
            まずは、自社に合う<br />縦型動画の使い方から。
          </h2>
          <p className="mx-auto mb-10 max-w-2xl leading-8 text-white/65">
            採用、ブランディング、商品PR、TikTok Shop活用まで。
            目的に合わせて最適な設計をご提案します。
          </p>
          <a href="mailto:info@example.com" className="inline-block rounded-full bg-cyan-300 px-10 py-5 font-black text-black transition hover:scale-105">
            30分無料相談する
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10 text-center text-sm text-white/40">
        © Chrono Snap
      </footer>
    </main>
  );
}
