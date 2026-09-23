import Link from 'next/link';
import {
  Rocket,
  MonitorSmartphone,
  Database,
  Server,
  KeyRound,
  Rocket as Deploy,
  ArrowRight,
  LayoutGrid,
  BookOpen,
  Gamepad2,
  Layers,
} from 'lucide-react';

const gameCards = [
  {
    name: 'Memory Game',
    genre: 'Multiplayer · Realtime',
    description:
      'Platform kuis real-time dengan mini game memory card, multi-bahasa, dan PWA. Tutorial paling lengkap — dari setup hingga deploy.',
    href: '/docs/memory-game',
    icon: Layers,
  },
];

const flow = [
  {
    title: 'Setup',
    description: 'Instalasi Next.js, Tailwind, Supabase, dan struktur folder.',
    href: '/docs/memory-game/setup',
    icon: Rocket,
  },
  {
    title: 'Frontend',
    description: 'Routing, komponen, dan tampilan tiap halaman game.',
    href: '/docs/memory-game/frontend',
    icon: MonitorSmartphone,
  },
  {
    title: 'Database',
    description: 'Skema tabel, RLS, dan Realtime Supabase.',
    href: '/docs/memory-game/database',
    icon: Database,
  },
  {
    title: 'Backend',
    description: 'Route Handlers, API, dan sinkronisasi state.',
    href: '/docs/memory-game/backend',
    icon: Server,
  },
  {
    title: 'Login',
    description: 'Autentikasi Google dan email/password.',
    href: '/docs/memory-game/login',
    icon: KeyRound,
  },
  {
    title: 'Deploy',
    description: 'Rilis ke server produksi dengan PM2.',
    href: '/docs/memory-game/deploy',
    icon: Deploy,
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero */}
      <section className="w-full max-w-4xl px-6 pt-4 pb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-card px-3 py-1 text-xs text-fd-muted-foreground mb-6">
          <span className="size-1.5 rounded-full bg-green-500" />
          Dokumentasi developer · GameForSmart
        </div>

        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight mb-4">
          Tutorial{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #fd800e, #dec313, #acbb24)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            GameForSmart
          </span>
        </h1>

        <p className="text-base text-fd-muted-foreground max-w-xl leading-relaxed mb-7">
          Panduan lengkap cara membangun setiap game di platform GameForSmart — dari setup
          lingkungan, frontend, database, backend, autentikasi, sampai deployment — dengan acuan
          langsung pada kode sumber asli.
        </p>

        <div className="flex flex-wrap gap-2.5">
          <Link
            href="/docs/memory-game"
            className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white"
            style={{ background: 'linear-gradient(135deg, #fd800e, #dec313, #acbb24)' }}
          >
            <BookOpen className="size-3.5" />
            Mulai dari sini
          </Link>
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 rounded-lg border border-fd-border bg-fd-card px-4 py-2 text-sm font-medium hover:bg-fd-accent transition-colors"
          >
            <LayoutGrid className="size-3.5" />
            Semua tutorial
          </Link>
          <a
            href="https://gameforsmart.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-fd-border bg-fd-card px-4 py-2 text-sm font-medium hover:bg-fd-accent transition-colors"
          >
            <Gamepad2 className="size-3.5" />
            gameforsmart.com
          </a>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full max-w-4xl px-6">
        <div className="border-t border-fd-border" />
      </div>

      {/* Alur pengembangan */}
      <section className="w-full max-w-4xl px-6 py-8">
        <p className="text-xs font-medium text-fd-muted-foreground uppercase tracking-widest mb-4">
          Alur pengembangan
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {flow.map((step) => {
            const Icon = step.icon;
            return (
              <Link
                key={step.title}
                href={step.href}
                className="group flex items-start gap-3.5 rounded-xl border border-fd-border bg-fd-card p-4 hover:bg-fd-accent transition-colors"
              >
                <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg border border-fd-border bg-fd-background">
                  <Icon className="size-4 text-fd-muted-foreground" />
                </div>
                <div>
                  <div className="text-sm font-medium group-hover:text-fd-primary transition-colors">
                    {step.title}
                  </div>
                  <div className="text-xs text-fd-muted-foreground mt-0.5 leading-relaxed">
                    {step.description}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Divider */}
      <div className="w-full max-w-4xl px-6">
        <div className="border-t border-fd-border" />
      </div>

      {/* Games */}
      <section className="w-full max-w-4xl px-6 py-8">
        <div className="flex items-center justify-between mb-4">
          <p className="text-xs font-medium text-fd-muted-foreground uppercase tracking-widest">
            Tutorial game
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {gameCards.map((game) => {
            const Icon = game.icon;
            return (
              <Link
                key={game.name}
                href={game.href}
                className="group flex flex-col gap-3 rounded-xl border border-fd-border bg-fd-card p-4 hover:bg-fd-accent transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex size-9 items-center justify-center rounded-lg border border-fd-border bg-fd-background">
                    <Icon className="size-4 text-fd-muted-foreground" />
                  </div>
                  <ArrowRight className="size-3.5 text-fd-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity mt-1" />
                </div>
                <div>
                  <div className="text-sm font-medium mb-0.5">{game.name}</div>
                  <div className="text-[11px] text-fd-muted-foreground mb-1.5">{game.genre}</div>
                  <p className="text-xs text-fd-muted-foreground leading-relaxed line-clamp-2">
                    {game.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Divider */}
      <div className="w-full max-w-4xl px-6">
        <div className="border-t border-fd-border" />
      </div>

      {/* CTA */}
      <section className="w-full max-w-4xl px-6 py-8 mb-4">
        <div className="rounded-xl border border-fd-border bg-fd-card px-8 py-10 text-center">
          <h2 className="text-xl font-semibold mb-2">Mau ikut membangun?</h2>
          <p className="text-sm text-fd-muted-foreground mb-6 max-w-sm mx-auto leading-relaxed">
            Tutorial untuk game lain akan menyusul. Mulai dari Memory Game yang paling lengkap.
          </p>
          <Link
            href="/docs/memory-game"
            className="inline-flex items-center gap-2 rounded-lg border border-fd-border bg-fd-background px-4 py-2 text-sm font-medium hover:bg-fd-accent transition-colors"
          >
            <BookOpen className="size-3.5" />
            Buka tutorial Memory Game
          </Link>
        </div>
      </section>
    </main>
  );
}