"use client";

import Link from "next/link";
import {
  IconArrowRight,
  IconBroadcast,
  IconCircleDashed,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-sky-500/5 rounded-full blur-3xl -z-10"
      />

      <div className="max-w-4xl w-full text-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-black/5 border border-black/5 text-[10px] font-mono uppercase tracking-[0.2em] mb-12"
        >
          <IconBroadcast size={14} className="text-sky-600 animate-pulse" />
          <span className="text-black/60">System Error // 404</span>
        </motion.div>

        {/* Hero Text */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-[120px] font-semibold tracking-tighter mb-10 leading-[0.9] text-zinc-900"
        >
          Page <span className="text-sky-700/80 italic font-light">not</span>{" "}
          found.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-black/50 max-w-2xl mx-auto mb-16 leading-relaxed font-light"
        >
          The system could not resolve the requested page. It may have moved, or
          the endpoint no longer exists.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <Link
            href="/"
            className="group relative inline-flex items-center gap-3 bg-black text-white px-10 py-5 rounded-full text-xs font-mono uppercase tracking-[0.2em] hover:bg-sky-800 transition-all duration-500 shadow-2xl shadow-black/20"
          >
            Return to home
            <IconArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>

          <Link
            href="/#work"
            className="inline-flex items-center gap-3 border border-black/10 px-10 py-5 rounded-full text-xs font-mono uppercase tracking-[0.2em] hover:bg-black/5 transition-all duration-500"
          >
            Explore work
          </Link>
        </motion.div>
      </div>

      {/* Decorative Corner Element */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-20 left-10 md:left-20 hidden md:block"
      >
        <div className="flex items-center gap-5 text-[10px] font-mono uppercase tracking-[0.4em] text-black/20 [writing-mode:vertical-rl] rotate-180">
          <span className="flex items-center gap-2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <IconCircleDashed size={14} />
            </motion.div>
            System OK
          </span>
          <div className="h-24 w-px bg-black/10" />
          <span>Error Log 0x404</span>
        </div>
      </motion.div>
    </main>
  );
}
