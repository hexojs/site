import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, type ReactNode, type SVGProps } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

type IconProps = SVGProps<SVGSVGElement>;

function iconBase(props: IconProps, children: ReactNode) {
  const { className, ...rest } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...rest}
    >
      {children}
    </svg>
  );
}

function NetworkIcon(props: IconProps) {
  return iconBase(
    props,
    <>
      <circle cx="12" cy="4.5" r="2" />
      <circle cx="5" cy="18" r="2" />
      <circle cx="19" cy="18" r="2" />
      <path d="M12 6.5v5m0 0-5.5 4M12 11.5l5.5 4" />
    </>,
  );
}

function LockIcon(props: IconProps) {
  return iconBase(
    props,
    <>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V7.5a4 4 0 0 1 8 0V11" />
    </>,
  );
}

function ChainIcon(props: IconProps) {
  return iconBase(
    props,
    <>
      <rect x="3" y="8" width="8" height="8" rx="3" />
      <rect x="13" y="8" width="8" height="8" rx="3" />
      <path d="M11 12h2" />
    </>,
  );
}

function TransferIcon(props: IconProps) {
  return iconBase(
    props,
    <>
      <path d="M4 8h13m0 0-3.5-3.5M17 8l-3.5 3.5" />
      <path d="M20 16H7m0 0 3.5-3.5M7 16l3.5 3.5" />
    </>,
  );
}

function CoinIcon(props: IconProps) {
  return iconBase(
    props,
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M9.5 9.7c0-1 1-1.7 2.5-1.7s2.5.8 2.5 1.7-1 1.3-2.5 1.6-2.5.7-2.5 1.7 1 1.7 2.5 1.7 2.5-.7 2.5-1.7" />
    </>,
  );
}

function TagIcon(props: IconProps) {
  return iconBase(
    props,
    <>
      <path d="M11 4h6a2 2 0 0 1 2 2v6l-9 9-8-8 9-9Z" />
      <circle cx="14.5" cy="8.5" r="1.4" />
    </>,
  );
}

function LayersIcon(props: IconProps) {
  return iconBase(
    props,
    <>
      <path d="M12 3.5 4 8l8 4.5L20 8Z" />
      <path d="M4 12.5 12 17l8-4.5" />
      <path d="M4 16.5 12 21l8-4.5" />
    </>,
  );
}

function ShieldIcon(props: IconProps) {
  return iconBase(
    props,
    <>
      <path d="M12 3.5 19 6.5v5c0 5-3 7.8-7 9-4-1.2-7-4-7-9v-5Z" />
      <path d="M9 12.2l2 2 4-4.2" />
    </>,
  );
}

function KeyIcon(props: IconProps) {
  return iconBase(
    props,
    <>
      <circle cx="8" cy="15" r="4" />
      <path d="M11 12.2 19 4.5m0 0v3.6m0-3.6h-3.6" />
    </>,
  );
}

function GlobeIcon(props: IconProps) {
  return iconBase(
    props,
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M4 12h16M12 4c2.2 2.2 3.3 5 3.3 8s-1.1 5.8-3.3 8c-2.2-2.2-3.3-5-3.3-8S9.8 6.2 12 4Z" />
    </>,
  );
}

function useParallaxHero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const backRef = useRef<HTMLDivElement | null>(null);
  const midRef = useRef<HTMLDivElement | null>(null);
  const frontRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    let rafId = 0;
    let pointerX = 0;
    let pointerY = 0;

    const apply = () => {
      rafId = 0;
      const hero = heroRef.current;
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      const progress = Math.min(Math.max(-rect.top / (rect.height || 1), 0), 1);
      if (backRef.current) {
        backRef.current.style.transform = `translateY(${progress * 36}px)`;
      }
      if (midRef.current) {
        midRef.current.style.transform = `translateY(${progress * 84}px) translateX(${pointerX * 12}px)`;
      }
      if (frontRef.current) {
        frontRef.current.style.transform = `translateY(${progress * -28}px) translateX(${pointerX * -16}px) translateY(${pointerY * -10}px)`;
      }
    };

    const queue = () => {
      if (!rafId) rafId = window.requestAnimationFrame(apply);
    };
    const onScroll = () => queue();
    const onPointerMove = (event: PointerEvent) => {
      const hero = heroRef.current;
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      pointerX = (event.clientX - rect.left) / rect.width - 0.5;
      pointerY = (event.clientY - rect.top) / rect.height - 0.5;
      queue();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    apply();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointerMove);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return { heroRef, backRef, midRef, frontRef };
}

function ChainLinkCta({ href, label }: { href: string; label: string }) {
  return (
    <a className="cta-chainlink" href={href}>
      {label}
      <svg viewBox="0 0 22 10" aria-hidden="true">
        <path className="cta-chainlink-path" d="M1 5h14" />
        <path className="cta-chainlink-arrow" d="M14 1.5 20 5l-6 3.5V1.5Z" />
      </svg>
    </a>
  );
}

function Nav() {
  return (
    <header className="site-nav">
      <a className="site-nav-brand" href="#top">
        <img className="site-nav-mark" src="/assets/brand/monogram-96.png" alt="" />
        暗号通貨とブロックチェーン
      </a>
      <nav className="site-nav-links" aria-label="セクション">
        <a href="#blockchain">ブロックチェーン</a>
        <a href="#crypto">暗号通貨</a>
        <a href="#principles">しくみ</a>
        <a href="#usecases">事例</a>
        <a href="#security">セキュリティ</a>
      </nav>
      <ChainLinkCta href="#blockchain" label="はじめる" />
    </header>
  );
}

function Hero() {
  const { heroRef, backRef, midRef, frontRef } = useParallaxHero();
  return (
    <section id="top" className="site-hero" ref={heroRef}>
      <div className="site-hero-layer site-hero-layer--back" ref={backRef}>
        <img src="/assets/hero/plate-back.jpg" alt="" />
      </div>
      <div className="site-hero-layer site-hero-layer--mid" ref={midRef}>
        <img src="/assets/hero/plate-mid.jpg" alt="" />
      </div>
      <div className="site-hero-scrim" />
      <div className="site-hero-layer site-hero-layer--front" ref={frontRef}>
        <img src="/assets/hero/hero-subject.png" alt="" />
      </div>
      <div className="site-hero-content">
        <p className="site-kicker site-reveal">信頼は、分散する。</p>
        <h1 className="site-hero-title site-reveal" style={{ animationDelay: "0.08s" }}>
          分散された信頼が、
          <br />
          価値を動かす。
        </h1>
        <p className="site-hero-sub site-reveal" style={{ animationDelay: "0.16s" }}>
          ブロックチェーンと暗号通貨のしくみを、はじめから丁寧に。
        </p>
        <div className="site-reveal" style={{ animationDelay: "0.24s" }}>
          <button
            type="button"
            className="cta-coin"
            onClick={() => {
              document.getElementById("blockchain")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="cta-coin-badge">
              <CoinIcon />
            </span>
            くわしく見る
          </button>
        </div>
      </div>
    </section>
  );
}

function BlockchainSection() {
  return (
    <section id="blockchain" className="site-section">
      <div className="site-container site-split">
        <div>
          <h2 className="site-h2">ブロックチェーンとは、書き換えられない記録の連なり</h2>
          <p className="site-p" style={{ marginTop: "1.25rem" }}>
            取引の記録を「ブロック」としてまとめ、時系列に鎖のようにつなげていく技術です。
            ひとつ前のブロックの内容をもとに次のブロックが作られるため、途中の記録を
            あとから書き換えることは極めて困難になります。
          </p>
          <p className="site-p" style={{ marginTop: "1rem" }}>
            管理者が一箇所にいるのではなく、ネットワークに参加する多数のコンピュータが
            同じ記録を共有し、たがいに検証し合うことで正しさを保っています。
          </p>
        </div>
        <div className="site-split-figure">
          <img src="/assets/sections/diagram.jpg" alt="ブロックが鎖状につながるしくみを表した図" />
        </div>
      </div>
    </section>
  );
}

function CryptoSection() {
  return (
    <section id="crypto" className="site-section site-section--panel">
      <div className="site-container site-split">
        <div className="site-stat-rail">
          <div>
            <span className="site-stat-num">2009</span>
            <span className="site-stat-label">最初の暗号通貨が発行された年</span>
          </div>
          <div>
            <span className="site-stat-num">24/7</span>
            <span className="site-stat-label">取引所も市場も止まらない</span>
          </div>
          <div>
            <span className="site-stat-num">分散型</span>
            <span className="site-stat-label">単一の管理者を持たない</span>
          </div>
        </div>
        <div>
          <h2 className="site-h2">
            暗号通貨は、鎖の上に生まれる新しい価値
          </h2>
          <p className="site-p" style={{ marginTop: "1.25rem" }}>
            ブロックチェーンに記録された残高や取引の履歴そのものが、暗号通貨の価値を
            裏づけています。国や銀行のような単一の発行主体を介さずに、参加者どうしが
            直接その価値をやり取りできる点が、これまでのお金の仕組みと大きく異なります。
          </p>
          <div className="site-split-figure" style={{ marginTop: "1.75rem" }}>
            <img src="/assets/sections/crypto.jpg" alt="鎖状に連なる発光するブロックのイメージ" />
          </div>
        </div>
      </div>
    </section>
  );
}

function PrinciplesSection() {
  return (
    <section id="principles" className="site-section site-section--textured">
      <div className="site-container">
        <p className="site-kicker">PRINCIPLES</p>
        <h2 className="site-h2" style={{ marginTop: "0.75rem", marginBottom: "2.5rem" }}>
          支えているのは、3つの原理
        </h2>
        <div className="site-bento">
          <article className="site-bento-cell">
            <NetworkIcon className="site-bento-icon" />
            <h3>分散化</h3>
            <p>
              特定の管理者を置かず、多数の参加者が同じ記録を持ち合う。ひとつの障害が
              システム全体を止めない設計です。
            </p>
          </article>
          <article className="site-bento-cell">
            <LockIcon className="site-bento-icon" />
            <h3>暗号技術</h3>
            <p>ハッシュ関数と電子署名により、記録の改ざんとなりすましを防ぎます。</p>
          </article>
          <article className="site-bento-cell">
            <ChainIcon className="site-bento-icon" />
            <h3>合意形成</h3>
            <p>参加者どうしが共通のルールに従い、新しいブロックの正しさを確認し合います。</p>
          </article>
        </div>
      </div>
    </section>
  );
}

function UseCasesSection() {
  const cases = [
    {
      Icon: TransferIcon,
      title: "送金",
      body: "銀行を介さず、国境をこえて直接価値を送ることができます。",
    },
    {
      Icon: CoinIcon,
      title: "資産",
      body: "株式や不動産の権利を記録・移転する手段として実験が進んでいます。",
    },
    {
      Icon: TagIcon,
      title: "NFT",
      body: "デジタルデータの所有や来歴を、ブロックチェーン上に証明します。",
    },
    {
      Icon: LayersIcon,
      title: "DeFi",
      body: "銀行を介さず貸し借りや取引ができる、分散型の金融サービスです。",
    },
  ];
  return (
    <section id="usecases" className="site-section site-section--panel">
      <div className="site-container">
        <h2 className="site-h2" style={{ marginBottom: "2.5rem" }}>
          すでに、暮らしのなかに
        </h2>
        <div className="site-gallery">
          {cases.map(({ Icon, title, body }) => (
            <article className="site-gallery-card" key={title}>
              <Icon className="site-gallery-icon" />
              <h3 style={{ fontWeight: 700, fontSize: "1.05rem" }}>{title}</h3>
              <p className="site-p" style={{ fontSize: "0.9rem" }}>
                {body}
              </p>
              <a className="cta-bracket" href="#principles">
                詳細
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SecuritySection() {
  const items = [
    {
      Icon: KeyIcon,
      title: "秘密鍵は誰にも共有しない",
      body: "取引所やサポートを名乗る相手からの秘密鍵・シードフレーズの要求は、すべて詐欺です。",
    },
    {
      Icon: ShieldIcon,
      title: "ハードウェアウォレットを検討する",
      body: "長期で資産を保有するなら、オフラインで鍵を管理する方法が有効です。",
    },
    {
      Icon: GlobeIcon,
      title: "URLと発行元を必ず確認する",
      body: "偽サイトやなりすましアプリによる被害が後を絶ちません。",
    },
  ];
  return (
    <section id="security" className="site-section">
      <div className="site-container site-security">
        <div>
          <p className="site-kicker">SECURITY</p>
          <h2 className="site-h2" style={{ marginTop: "0.75rem" }}>
            自分の資産は、自分で守る
          </h2>
          <p className="site-rail-note" style={{ marginTop: "2rem" }}>
            SELF-CUSTODY
            <br />
            NOT YOUR KEYS,
            <br />
            NOT YOUR COINS
            <br />
            秘密鍵の管理が、資産そのものの管理になる。
          </p>
        </div>
        <div className="site-security-list">
          {items.map(({ Icon, title, body }) => (
            <div className="site-security-item" key={title}>
              <Icon className="site-bento-icon" />
              <div>
                <h3 style={{ fontWeight: 700, marginBottom: "0.4rem" }}>{title}</h3>
                <p className="site-p" style={{ fontSize: "0.92rem" }}>
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="cta-decode"
          style={{ gridColumn: "1 / -1" }}
          onClick={() => {
            document.getElementById("start")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="cta-decode-ghost">SECURITY_GUIDE.md</span>
          <span className="cta-decode-real">確認する</span>
        </button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="start" className="site-footer">
      <div className="site-footer-banner">
        <h2 className="site-h2" style={{ margin: "0.75rem auto 1.25rem", maxWidth: "26ch" }}>
          学びは、ここから始まる。
        </h2>
        <p className="site-p" style={{ margin: "0 auto 2rem" }}>
          ブロックチェーンと暗号通貨についての基礎知識を、これからも追加していきます。
        </p>
        <a className="cta-stamp" href="#blockchain">
          資料を読む
        </a>
      </div>
      <div className="site-container site-footer-columns">
        <div>
          <h4>このサイトについて</h4>
          <p>暗号通貨とブロックチェーンのしくみを、はじめての方にも伝わるように解説しています。</p>
        </div>
        <div>
          <h4>目次</h4>
          <p>
            <a href="#blockchain">ブロックチェーンとは</a>
            <br />
            <a href="#crypto">暗号通貨とは</a>
            <br />
            <a href="#security">セキュリティ</a>
          </p>
        </div>
        <div>
          <h4>免責事項</h4>
          <p>本サイトは教育目的の情報提供であり、投資助言ではありません。</p>
        </div>
      </div>
      <p className="site-footer-legal">© 2026 暗号通貨とブロックチェーン</p>
    </footer>
  );
}

function Index() {
  return (
    <main className="site-root">
      <Nav />
      <Hero />
      <BlockchainSection />
      <CryptoSection />
      <PrinciplesSection />
      <UseCasesSection />
      <SecuritySection />
      <Footer />
    </main>
  );
}
