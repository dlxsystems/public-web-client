"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";

function getNext21Midnight(): Date {
  const now = new Date();
  const candidate = new Date(now.getFullYear(), now.getMonth(), 21, 0, 0, 0, 0);
  if (now >= candidate) {
    return new Date(now.getFullYear(), now.getMonth() + 1, 21, 0, 0, 0, 0);
  }
  return candidate;
}

function calcTimeLeft(target: Date) {
  const now = Date.now();
  const diff = target.getTime() - now;

  if (diff <= 0)
    return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds, done: false };
}

export default function Home() {
  const [target] = useState(() => getNext21Midnight());
  const [timeLeft, setTimeLeft] = useState(() => calcTimeLeft(target));

  useEffect(() => {
    setTimeLeft(calcTimeLeft(target));
    const id = setInterval(() => setTimeLeft(calcTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="flex min-h-screen flex-col justify-between px-4">
      <main className="mx-auto w-full max-w-xl text-center pt-24">
        <h1 className="mb-4 text-3xl font-semibold text-black">
          Under Development
        </h1>

        <p className="mb-6 text-md text-zinc-600">
          We are currently developing the website. We will go live soon.
        </p>

        {/* Countdown */}
        <div
          role="timer"
          aria-live="polite"
          className="mx-auto mb-10 flex items-stretch gap-3 justify-center"
        >
          <div className="flex w-20 flex-col items-center rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm">
            <div className="text-xl font-semibold text-black">
              {String(timeLeft.days)}
            </div>
            <div className="mt-1 text-xs text-zinc-500">Days</div>
          </div>

          <div className="flex w-16 flex-col items-center rounded-md border border-zinc-200 bg-white px-2 py-2 text-sm">
            <div className="text-xl font-semibold text-black">
              {pad(timeLeft.hours)}
            </div>
            <div className="mt-1 text-xs text-zinc-500">Hours</div>
          </div>

          <div className="flex w-16 flex-col items-center rounded-md border border-zinc-200 bg-white px-2 py-2 text-sm">
            <div className="text-xl font-semibold text-black">
              {pad(timeLeft.minutes)}
            </div>
            <div className="mt-1 text-xs text-zinc-500">Min</div>
          </div>

          <div className="flex w-16 flex-col items-center rounded-md border border-zinc-200 bg-white px-2 py-2 text-sm">
            <div className="text-xl font-semibold text-black">
              {pad(timeLeft.seconds)}
            </div>
            <div className="mt-1 text-xs text-zinc-500">Sec</div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 flex flex-col items-center text-center">
        <Image
          src={Logo} // update with your actual logo path
          width={80}
          height={80}
          alt="Company Logo"
          className="mb-4"
        />

        <p className="text-xs text-zinc-500">
          © {new Date().getFullYear()} dlx systems. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
