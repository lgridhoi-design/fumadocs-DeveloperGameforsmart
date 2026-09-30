'use client';

import { useState, useEffect } from 'react';
import { RotateCw, Sparkles } from 'lucide-react';

const ALL_MEMO_IMAGES = [
  { src: '/memogame/cat.webp', alt: 'Kartu Kucing' },
  { src: '/memogame/cow.webp', alt: 'Kartu Sapi' },
  { src: '/memogame/crab.webp', alt: 'Kartu Kepiting' },
  { src: '/memogame/fox.webp', alt: 'Kartu Rubah' },
  { src: '/memogame/jellyfish.webp', alt: 'Kartu Ubur-ubur' },
  { src: '/memogame/koala.webp', alt: 'Kartu Koala' },
  { src: '/memogame/parrot.webp', alt: 'Kartu Burung Beo' },
  { src: '/memogame/penguin.webp', alt: 'Kartu Penguin' },
  { src: '/memogame/sea-turtle.webp', alt: 'Kartu Penyu' },
  { src: '/memogame/whale.webp', alt: 'Kartu Paus' },
];

function getRandomImages(count: number) {
  const shuffled = [...ALL_MEMO_IMAGES].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export function MemoryCards() {
  const [cards, setCards] = useState(() =>
    getRandomImages(6).map((img, i) => ({
      id: i,
      src: img.src,
      alt: img.alt,
      isFlipped: false,
    }))
  );

  const shuffleCards = () => {
    const randomImgs = getRandomImages(6);
    setCards(
      randomImgs.map((img, i) => ({
        id: i,
        src: img.src,
        alt: img.alt,
        isFlipped: false,
      }))
    );
  };

  const handleCardClick = (id: number) => {
    setCards((prev) =>
      prev.map((c) => {
        if (c.id === id) {
          if (!c.isFlipped) {
            const randomImg =
              ALL_MEMO_IMAGES[Math.floor(Math.random() * ALL_MEMO_IMAGES.length)];
            return { ...c, src: randomImg.src, alt: randomImg.alt, isFlipped: true };
          }
          return { ...c, isFlipped: false };
        }
        return c;
      })
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prev) => {
        const randomIndex = Math.floor(Math.random() * prev.length);
        const randomImg =
          ALL_MEMO_IMAGES[Math.floor(Math.random() * ALL_MEMO_IMAGES.length)];
        return prev.map((c, idx) => {
          if (idx === randomIndex) {
            return {
              ...c,
              src: randomImg.src,
              alt: randomImg.alt,
              isFlipped: !c.isFlipped,
            };
          }
          return c;
        });
      });
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      <div className="mb-2.5 flex items-center justify-between text-xs text-fd-muted-foreground">
        <span className="flex items-center gap-1.5 font-medium text-purple-300">
          <Sparkles className="size-3.5 text-amber-400" /> Click cards to flip open!
        </span>
        <button
          onClick={shuffleCards}
          type="button"
          className="flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-medium bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition-colors cursor-pointer"
          title="Acak Gambar Kartu"
        >
          <RotateCw className="size-3" /> Acak Gambar
        </button>
      </div>

      <div className="grid grid-cols-3 gap-2.5">
        {cards.map((card) => (
          <button
            key={card.id}
            type="button"
            onClick={() => handleCardClick(card.id)}
            className="group relative aspect-square w-full cursor-pointer focus:outline-none [perspective:1000px]"
          >
            <div
              className={`relative size-full rounded-xl transition-all duration-500 [transform-style:preserve-3d] shadow-md ${
                card.isFlipped ? '[transform:rotateY(180deg)]' : ''
              }`}
            >
              {/* Front side (Closed card back) */}
              <div
                className="absolute inset-0 flex items-center justify-center rounded-xl border border-purple-500/30 bg-gradient-to-br from-neutral-900 via-purple-950/60 to-neutral-900 shadow-inner [backface-visibility:hidden] group-hover:border-purple-400/60 transition-colors"
                style={{ WebkitBackfaceVisibility: 'hidden' }}
              >
                <div className="flex flex-col items-center justify-center gap-0.5">
                  <span className="text-xl font-bold text-purple-400/80 group-hover:scale-110 transition-transform">
                    ?
                  </span>
                </div>
              </div>

              {/* Back side (Revealed random animal image) */}
              <div
                className="absolute inset-0 size-full overflow-hidden rounded-xl border border-purple-500/50 bg-neutral-900 shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)]"
                style={{
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={card.src}
                  alt={card.alt}
                  width={512}
                  height={512}
                  className="size-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

