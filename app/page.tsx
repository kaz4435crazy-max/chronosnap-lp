const works = [
  { platform: 'YouTube Shorts', category: 'Branding / PR', url: 'https://youtube.com/shorts/NdJpNp_WLg0' },
  { platform: 'YouTube Shorts', category: 'Branding / PR', url: 'https://youtube.com/shorts/_XeSLnKg77o' },
  { platform: 'YouTube Shorts', category: 'Product / PR', url: 'https://youtube.com/shorts/AML94lBtwaM' },
  { platform: 'TikTok', category: 'Shop / PR', url: 'https://www.tiktok.com/@tgap_tokyo/video/7595705882155977992' },
  { platform: 'Instagram', category: 'Account / Branding', url: 'https://www.instagram.com/megasportsjpn/' },
  { platform: 'YouTube Shorts', category: 'Corporate Channel', url: 'https://www.youtube.com/@%E5%BB%BA%E3%83%87%E3%83%9D%E5%85%AC%E5%BC%8F%E3%83%81%E3%83%A3%E3%83%B3%E3%83%8D%E3%83%AB/shorts' },
];

const services = [
  ['01', '縦型動画マーケティング', 'TikTok / Instagram Reels / YouTube Shortsに最適化した企画・制作・運用。'],
  ['02', '採用 / ブランディング支援', '企業の魅力・人・現場を伝え、応募・認知・信頼につなげる設計。'],
  ['03', 'TikTok Shop / インフルエンサー', 'テストパートナー企業を募集。販売導線と発信者活用まで伴走。'],
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#050505] text-white">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <div className="text-lg font-black tracking-[0.25em]">CHRONO <span className="text-accent">SNAP</span></div>
          <a href="#contact" className="btn btn-primary hidden md:inline-flex">無料相談</a>
        </div>
      </header>

      <section className="relative flex min-h-screen items-center justify-center px-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(0,229,255,0.22),transparent_35%),linear-gradient(to_bottom,rgba(0,0,0,.2),#050505)]" />
        <div className="relative z-10 max-w-5xl pt-20">
          <p className="mb-5 text-sm font-bold tracking-[0.35em] text-accent">VERTICAL VIDEO MARKETING</p>
          <h1 className="text-5xl font-black leading-tight tracking-tight md:text-8xl">広告っぽくないのに、<br />結果が出る。</h1>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/75 md:text-2xl">プロ品質 × SNS設計で<br className="md:hidden" />採用・ブランド・売上を動かす<br />縦型動画マーケティング</p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="#contact" className="btn btn-primary">無料相談する</a>
            <a href="#works" className="btn btn-secondary">実績を見る</a>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="text-3xl font-black md:text-5xl">SNS運用、<br />作るだけで止まっていませんか？</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {['何を投稿すればいいかわからない','動画を作っても成果につながらない','採用やブランドの魅力が伝わらない','運用が続かない'].map((t)=><div className="card" key={t}>{t}</div>)}
        </div>
      </section>

      <section className="section">
        <p className="mb-4 text-sm font-bold tracking-[0.3em] text-accent">DIFFERENCE</p>
        <h2 className="text-3xl font-black md:text-5xl">なぜ、結果が変わるのか</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            ['プロ品質 × SNS最適化','撮影・照明・音声・構成をSNS文脈へ落とし込み、視聴維持率を設計。'],
            ['勝てるフォーマットを構築','フック違い・訴求違いを試し、データをもとに改善。'],
            ['BtoB企業に強い信頼感','ブランドを損なわない品質で、採用・広報・販促に使える動画へ。'],
          ].map(([h,b])=><div className="card" key={h}><h3 className="text-2xl font-bold">{h}</h3><p className="mt-4 text-white/65">{b}</p></div>)}
        </div>
      </section>

      <section className="section">
        <p className="mb-4 text-sm font-bold tracking-[0.3em] text-accent">SERVICE</p>
        <h2 className="text-3xl font-black md:text-5xl">サービス</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map(([n,h,b])=><div className="card" key={h}><div className="text-accent">{n}</div><h3 className="mt-5 text-2xl font-bold">{h}</h3><p className="mt-4 text-white/65">{b}</p></div>)}
        </div>
      </section>

      <section id="works" className="section">
        <p className="mb-4 text-sm font-bold tracking-[0.3em] text-accent">WORKS</p>
        <h2 className="text-3xl font-black md:text-5xl">制作実績</h2>
        <div className="mt-10 flex gap-5 overflow-x-auto pb-6 md:grid md:grid-cols-3 md:overflow-visible">
          {works.map((w,i)=><a className="card min-w-[270px] group" href={w.url} target="_blank" rel="noreferrer" key={w.url}>
            <div className="aspect-[9/16] rounded-2xl bg-gradient-to-br from-white/15 to-accent/20 p-5 flex items-end"><span className="text-5xl font-black text-white/20">{String(i+1).padStart(2,'0')}</span></div>
            <div className="mt-5 text-sm text-accent">{w.platform}</div><h3 className="mt-2 text-xl font-bold">{w.category}</h3><p className="mt-4 text-sm text-white/55 group-hover:text-white">詳しく見る →</p>
          </a>)}
        </div>
      </section>

      <section className="section">
        <p className="mb-4 text-sm font-bold tracking-[0.3em] text-accent">PROCESS</p>
        <h2 className="text-3xl font-black md:text-5xl">運用フロー</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-6">
          {['ヒアリング','設計','撮影','編集','投稿','分析改善'].map((s,i)=><div className="card" key={s}><div className="text-accent">STEP {i+1}</div><div className="mt-3 font-bold">{s}</div></div>)}
        </div>
      </section>

      <section id="contact" className="section text-center">
        <div className="rounded-[2rem] border border-accent/30 bg-accent/10 px-6 py-16">
          <h2 className="text-3xl font-black md:text-5xl">まずは、自社に合う<br />縦型動画の使い方から。</h2>
          <p className="mx-auto mt-6 max-w-2xl text-white/70">採用、ブランディング、商品PR、TikTok Shop活用まで。目的に合わせて最適な設計をご提案します。</p>
          <a href="mailto:info@example.com" className="btn btn-primary mt-8">無料相談する</a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10 text-center text-sm text-white/45">© Chrono Snap</footer>
    </main>
  );
}
