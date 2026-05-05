import Image from "next/image";

const works = [
  {
    title: "ブランドPR / YouTube Shorts",
    image: "https://img.youtube.com/vi/NdJpNp_WLg0/hqdefault.jpg",
    url: "https://youtube.com/shorts/NdJpNp_WLg0",
  },
  {
    title: "ブランドPR / YouTube Shorts",
    image: "https://img.youtube.com/vi/_XeSLnKg77o/hqdefault.jpg",
    url: "https://youtube.com/shorts/_XeSLnKg77o",
  },
  {
    title: "商品PR / YouTube Shorts",
    image: "https://img.youtube.com/vi/AML94lBtwaM/hqdefault.jpg",
    url: "https://youtube.com/shorts/AML94lBtwaM",
  },
];

export default function Home() {
  return (
    <main className="bg-white text-[#111]">
      <header className="fixed top-0 z-50 w-full border-b border-black/10 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Image src="/logo.jpg" alt="Chrono Snap" width={160} height={48} />
          </div>
          <a href="mailto:info@enable-studio.com" className="rounded-full bg-black px-6 py-3 text-sm font-bold text-white">
            無料相談
          </a>
        </div>
      </header>

      <section className="px-6 pb-24 pt-40">
        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
          <div>
            <p className="mb-6 text-sm font-bold tracking-[0.3em] text-cyan-600">
              VERTICAL VIDEO MARKETING
            </p>
            <h1 className="mb-8 text-5xl font-black leading-tight md:text-7xl">
              採用も、ブランドも、売上も。
              <br />
              <span className="text-cyan-500">縦型動画で動かす。</span>
            </h1>
            <p className="mb-10 text-lg leading-9 text-black/65">
              Chrono Snapは、TikTok / Instagram Reels / YouTube Shortsを活用し、
              企業の魅力を“伝わる動画”に変える縦型動画マーケティング支援です。
              企画・撮影・編集・投稿設計・分析改善まで伴走します。
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a href="mailto:info@enable-studio.com" className="rounded-full bg-black px-8 py-4 text-center font-bold text-white">
                30分無料相談する
              </a>
              <a href="#works" className="rounded-full border border-black/20 px-8 py-4 text-center font-bold">
                実績を見る
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-gray-50 p-6 shadow-xl">
            <div className="aspect-[9/14] rounded-[1.5rem] bg-gradient-to-br from-cyan-100 via-white to-gray-200 p-6">
              <div className="flex h-full flex-col justify-between rounded-[1rem] bg-white p-6 shadow">
                <p className="text-sm font-bold text-cyan-600">SNS CREATIVE</p>
                <div>
                  <p className="text-5xl font-black">Short Video</p>
                  <p className="mt-4 text-black/60">採用 / PR / TikTok Shop</p>
                </div>
                <p className="text-sm text-black/50">Designed for business growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-gray-50 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {[
            ["企画から運用まで", "投稿ネタ出しで止まらず、目的から逆算して継続運用。"],
            ["プロ品質の制作", "撮影・照明・音声・構成まで、企業ブランドを損なわない品質。"],
            ["分析改善まで伴走", "投稿して終わりではなく、数字を見ながら改善。"],
          ].map(([title, text]) => (
            <div key={title} className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-black">{title}</h3>
              <p className="leading-8 text-black/60">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-bold tracking-[0.3em] text-cyan-600">SERVICE</p>
          <h2 className="mb-14 text-4xl font-black md:text-6xl">案件化につながる支援領域</h2>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["01", "採用向けショート動画", "会社の雰囲気・社員の人柄・仕事の魅力を伝え、応募前の不安を減らします。"],
              ["02", "ブランドPR / SNS運用", "企業や店舗の世界観を継続的に発信し、選ばれる理由をつくります。"],
              ["03", "TikTok Shop / インフルエンサー", "商品訴求・販売導線・クリエイター活用までテストパートナーとして伴走します。"],
            ].map(([num, title, text]) => (
              <div key={num} className="rounded-3xl border border-black/10 p-8">
                <p className="mb-8 text-5xl font-black text-cyan-500">{num}</p>
                <h3 className="mb-5 text-2xl font-black">{title}</h3>
                <p className="leading-8 text-black/60">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="works" className="bg-black px-6 py-28 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-bold tracking-[0.3em] text-cyan-300">WORKS</p>
          <h2 className="mb-6 text-4xl font-black md:text-6xl">制作実績</h2>
          <p className="mb-14 max-w-2xl leading-8 text-white/60">
            企業・ブランド・店舗の魅力を、各SNSに最適化した縦型動画として制作。
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {works.map((work) => (
              <a key={work.url} href={work.url} target="_blank" className="group block overflow-hidden rounded-3xl bg-white/10">
                <div className="relative aspect-[9/14] overflow-hidden">
                  <Image src={work.image} alt={work.title} fill className="object-cover transition group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{work.title}</h3>
                  <p className="mt-4 text-cyan-300">詳しく見る →</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-bold tracking-[0.3em] text-cyan-600">CONTACT</p>
          <h2 className="mb-8 text-4xl font-black leading-tight md:text-6xl">
            まずは、自社に合う
            <br />
            縦型動画の使い方から。
          </h2>
          <p className="mx-auto mb-10 max-w-2xl leading-8 text-black/60">
            採用、ブランディング、商品PR、TikTok Shop活用まで。
            目的に合わせて最適な設計をご提案します。
          </p>
          <a href="mailto:info@enable-studio.com" className="inline-block rounded-full bg-black px-10 py-5 font-black text-white">
            info@enable-studio.com に相談する
          </a>
        </div>
      </section>

      <footer className="border-t border-black/10 px-6 py-8 text-center text-sm text-black/50">
        © Chrono Snap
      </footer>
    </main>
  );
}
