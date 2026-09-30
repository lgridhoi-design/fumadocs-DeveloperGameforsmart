import Link from 'next/link';
import {
  Rocket,
  Target,
  FolderTree,
  Database,
  Server,
  Layers,
  Images,
  LayoutDashboard,
  Globe,
  LogIn,
  ArrowRight,
  Sparkles,
  Zap,
} from 'lucide-react';
import { MemoryCards } from '@/components/memory-cards';

const startHereCards = [
  {
    title: 'Setup Proyek',
    description:
      'Instalasi Next.js 14, Tailwind v4, Supabase, sampai peta lengkap struktur folder.',
    href: '/docs/setup',
    icon: FolderTree,
    color: 'text-indigo-400',
    bgColor: 'bg-indigo-950/40 border-indigo-500/20',
  },
  {
    title: 'Database Schema',
    description:
      'Satu project Supabase — tabel sessions, participants, quizzes, plus realtime & RLS.',
    href: '/docs/database',
    icon: Database,
    color: 'text-blue-400',
    bgColor: 'bg-blue-950/40 border-blue-500/20',
  },
  {
    title: 'Deploy',
    description:
      'Rilis ke Vercel: import repo, pasang env produksi, dan atur redirect OAuth.',
    href: '/docs/deploy',
    icon: Server,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-950/40 border-emerald-500/20',
  },
];

const moduleCards = [
  {
    title: 'Overview & Arsitektur',
    description:
      'Arsitektur platform kuis real-time, alur game dari lobby sampai leaderboard, dan pola sinkronisasi antar pemain.',
    href: '/docs',
    icon: Layers,
    cardBg: 'bg-[#18162c]/80 hover:bg-[#201c3c] border-purple-900/40 hover:border-purple-500/60',
    iconBg: 'bg-purple-950/80 border-purple-500/30 text-purple-400',
  },
  {
    title: 'Tampilan Aplikasi',
    description:
      'Galeri 15 layar aplikasi: login, beranda, pilih kuis, lobby, gameplay, sampai halaman hasil.',
    href: '/docs/tampilan',
    icon: Images,
    cardBg: 'bg-[#112425]/80 hover:bg-[#162f31] border-teal-900/40 hover:border-teal-500/60',
    iconBg: 'bg-teal-950/80 border-teal-500/30 text-teal-400',
  },
  {
    title: 'Frontend',
    description:
      'Peta rute per halaman plus kode verbatim seluruh file app/ dan komponennya, siap disalin.',
    href: '/docs/frontend',
    icon: LayoutDashboard,
    cardBg: 'bg-[#281a13]/80 hover:bg-[#352219] border-amber-900/40 hover:border-amber-500/60',
    iconBg: 'bg-amber-950/80 border-amber-500/30 text-amber-400',
  },
  {
    title: 'Backend & Realtime',
    description:
      'Tiga Route Handler untuk join room, heartbeat pemain, dan status countdown yang disinkronkan server.',
    href: '/docs/backend',
    icon: Globe,
    cardBg: 'bg-[#112030]/80 hover:bg-[#162a3f] border-cyan-900/40 hover:border-cyan-500/60',
    iconBg: 'bg-cyan-950/80 border-cyan-500/30 text-cyan-400',
  },
  {
    title: 'Login & Autentikasi',
    description:
      'Supabase Auth versi minimal — email/password dan Google OAuth, sekitar 150 baris kode.',
    href: '/docs/login',
    icon: LogIn,
    cardBg: 'bg-[#272111]/80 hover:bg-[#342b16] border-yellow-900/40 hover:border-yellow-500/60',
    iconBg: 'bg-yellow-950/80 border-yellow-500/30 text-yellow-400',
  },
  {
    title: 'Struktur Folder',
    description:
      'Daftar file kunci di app/, lib/, hooks/, dan components/ sebagai acuan saat menyalin kode.',
    href: '/docs/setup/struktur-folder',
    icon: FolderTree,
    cardBg: 'bg-[#291423]/80 hover:bg-[#361a2e] border-pink-900/40 hover:border-pink-500/60',
    iconBg: 'bg-pink-950/80 border-pink-500/30 text-pink-400',
  },
];

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Header Section */}
      <section className="flex flex-col items-center text-center pt-4 pb-12 sm:pb-16">
        {/* Pill Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/30 px-3.5 py-1.5 text-xs font-medium text-emerald-400 backdrop-blur-md shadow-sm shadow-emerald-500/10">
          <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
          Build Guide - Memory Game
        </div>

        {/* Hero Title */}
        <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-fd-foreground sm:text-5xl lg:text-6xl leading-[1.15]">
          Bangun Platform Kuis{' '}
          <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
            Real-Time
          </span>
        </h1>

        {/* Hero Description */}
        <p className="mt-5 max-w-2xl text-sm sm:text-base leading-relaxed text-fd-muted-foreground">
          Panduan teknis membangun Memory Game GameForSmart — kuis multiplayer dengan mini
          game memory card, multi-bahasa, dan PWA. Dari setup Next.js, frontend, database,
          backend, autentikasi, sampai deployment.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-600/25 transition-all hover:opacity-95 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Rocket className="size-4" />
            Mulai Bangun Game
          </Link>
          <Link
            href="/docs/frontend"
            className="inline-flex items-center gap-2 rounded-xl border border-neutral-700/60 bg-neutral-900/70 px-4.5 py-2.5 text-sm font-medium text-fd-foreground backdrop-blur-md transition-all hover:bg-neutral-800 hover:border-neutral-500"
          >
            <Target className="size-4 text-purple-400" />
            Lihat Kode Frontend
          </Link>
          <Link
            href="/docs/setup"
            className="inline-flex items-center gap-2 rounded-xl border border-neutral-700/60 bg-neutral-900/70 px-4.5 py-2.5 text-sm font-medium text-fd-foreground backdrop-blur-md transition-all hover:bg-neutral-800 hover:border-neutral-500"
          >
            <Globe className="size-4 text-emerald-400" />
            Gambaran Umum
          </Link>
        </div>

        {/* Memory Cards Interactive Visual Banner */}
        <div className="mt-12 w-full max-w-md rounded-2xl border border-neutral-800 bg-neutral-900/50 p-4 backdrop-blur-md shadow-2xl">
          <div className="mb-3 flex items-center justify-between px-1 text-xs text-fd-muted-foreground">
            <span className="flex items-center gap-1.5 font-medium text-neutral-300">
              <Sparkles className="size-3.5 text-amber-400" /> Live Mini Game Preview
            </span>
            <span className="text-[11px] text-neutral-500">Interactive Memory Cards</span>
          </div>
          <MemoryCards />
        </div>
      </section>

      {/* Section 1: Mulai dari Sini */}
      <section className="mb-14">
        <div className="mb-5 flex items-center gap-2">
          <Zap className="size-4.5 text-purple-400" />
          <h2 className="text-lg font-bold tracking-tight text-fd-foreground sm:text-xl">
            Mulai dari Sini
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {startHereCards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.title}
                href={card.href}
                className="group relative flex items-start gap-4 rounded-2xl border border-neutral-800/80 bg-neutral-900/40 p-5 transition-all hover:border-neutral-700 hover:bg-neutral-900/80"
              >
                <div
                  className={`flex size-11 shrink-0 items-center justify-center rounded-xl border ${card.bgColor} transition-transform group-hover:scale-105`}
                >
                  <Icon className={`size-5 ${card.color}`} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-semibold text-fd-foreground group-hover:text-purple-300 transition-colors">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm leading-relaxed text-fd-muted-foreground line-clamp-2">
                    {card.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Section 2: Modul Game */}
      <section className="pb-16">
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers className="size-4.5 text-purple-400" />
            <h2 className="text-lg font-bold tracking-tight text-fd-foreground sm:text-xl">
              Modul Game
            </h2>
          </div>
          <Link
            href="/docs"
            className="group inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-fd-muted-foreground hover:text-purple-400 transition-colors"
          >
            Lihat Semua
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {moduleCards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.title}
                href={card.href}
                className={`group flex flex-col justify-between rounded-2xl border ${card.cardBg} p-5 transition-all hover:scale-[1.01] shadow-lg shadow-black/20`}
              >
                <div>
                  <div
                    className={`mb-4 flex size-10 items-center justify-center rounded-xl border ${card.iconBg} transition-transform group-hover:scale-110`}
                  >
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-purple-200 transition-colors">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-neutral-400 line-clamp-3">
                    {card.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
