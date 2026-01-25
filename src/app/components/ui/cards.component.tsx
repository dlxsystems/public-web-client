"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  IconArrowRight,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconMail,
  IconArrowUpRight,
  IconQuote,
} from "@tabler/icons-react";

// --- Types ---

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: any; // Type for Tabler icon
  bg: string;
  text: string;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  description: string;
  industry: string;
  year: string;
  image: string;
  slug: string;
}

export interface TeamMemberItem {
  name: string;
  role: string;
  image: string;
  bio: string;
  socials: {
    linkedin?: string;
    mail?: string;
    twitter?: string;
    github?: string;
  };
}

export interface BlogPostItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  readingTime: string;
  slug: string;
  bg: string;
}

export interface CustomerStoryItem {
  id: string;
  quote: string;
  author: string;
  company: string;
  image: string;
}

// --- Components ---

// Removed Framer Motion for cards to restore smoothness via CSS properties.
// Apple-style animations are best achieved with CSS ease-out transitions for simple hovers,
// and avoiding heavy JS layout recalculations on hover.

export function ServiceCard({ service }: { service: ServiceItem }) {
  const Icon = service.icon;

  return (
    <div
      className={`relative min-h-[360px] md:min-h-[400px] md:h-[450px] rounded-[32px] md:rounded-[48px] overflow-hidden ${service.bg} p-6 md:p-10 flex flex-col justify-between transition-transform duration-700 hover:scale-[1.01]`}
    >
      <div className={`flex items-start justify-between ${service.text}`}>
        <Icon size={48} stroke={1} className="md:w-14 md:h-14" />
        <span className="text-5xl md:text-6xl font-extralight tracking-tighter opacity-20">
          {service.id}
        </span>
      </div>

      <div>
        <h4 className="text-3xl md:text-5xl font-medium tracking-tighter text-[#1d1d1f] mb-4 md:mb-6 leading-[1.05]">
          {service.title}
        </h4>
        <p className="text-sm md:text-md text-[#1d1d1f]/70 leading-snug font-mono">
          {service.description}
        </p>
      </div>
    </div>
  );
}

export function WorkCard({ study }: { study: CaseStudyItem }) {
  return (
    <Link
      href={`/work/${study.slug}`}
      className="group block relative h-[500px] md:h-[620px] w-full bg-[#0a0a0a] rounded-[32px] md:rounded-[48px] overflow-hidden shadow-2xl transition-all duration-700 hover:shadow-black/40 hover:-translate-y-1"
    >
      {/* Vertical Year Label - Right Side (Desktop Only) */}
      <div className="hidden md:flex absolute right-4 top-12 bottom-0 w-12 flex-col items-center z-30 pointer-events-none">
        <span className="text-[14px] font-bold tracking-[0.25em] text-white/40 uppercase rotate-90 origin-center whitespace-nowrap mt-4 mix-blend-overlay">
          {study.year}
        </span>
        <div className="w-px h-12 bg-white/20 mt-8 mb-4 mix-blend-overlay" />
      </div>

      {/* Content Layer - Top Left */}
      <div className="absolute top-0 left-0 right-0 md:right-12 p-6 md:p-10 z-20 pointer-events-none">
        <div className="flex items-center gap-3 mb-3 md:mb-4">
          <span className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] text-white/70 uppercase">
            {study.industry}
          </span>
          {/* Mobile Year Badge */}
          <span className="md:hidden text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">
            {study.year}
          </span>
        </div>
        <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-[1.05] mb-3 md:mb-4 max-w-lg drop-shadow-lg">
          {study.title}
        </h3>
        <p className="text-base md:text-lg text-white/80 font-medium leading-relaxed max-w-sm line-clamp-2 opacity-100 md:opacity-0 md:transform md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] drop-shadow-md">
          {study.description}
        </p>
      </div>

      {/* Image Layer */}
      <div className="absolute inset-0 h-full w-full">
        <Image
          src={study.image}
          alt={study.title}
          fill
          unoptimized
          className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105 blur-[1px] opacity-80 group-hover:opacity-60"
        />
        {/* Stronger Cinematic Gradient for legibility */}
        <div className="absolute inset-0 bg-linear-to-b from-black/90 via-black/20 to-black/60 pointer-events-none" />
      </div>

      {/* Button Layer - Bottom */}
      <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20">
        <div className="flex items-center gap-3 backdrop-blur-xl border border-white/20 pl-4 pr-2 py-2 md:pl-5 md:pr-2 rounded-full text-xs md:text-sm font-medium text-white transition-all duration-500 group-hover:bg-white group-hover:text-black group-hover:border-white">
          <span>View Case Study</span>
          <div className="w-6 h-6 md:w-8 md:h-8 flex items-center rounded-full justify-center bg-white/20 text-white group-hover:bg-black group-hover:text-white transition-colors duration-500">
            <IconArrowUpRight
              size={14}
              stroke={2.5}
              className="md:w-4 md:h-4"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

export function TeamCard({ member }: { member: TeamMemberItem }) {
  return (
    <div className="group relative w-full aspect-4/5 max-w-lg rounded-[48px] overflow-hidden bg-[#0a0a0a] shadow-2xl transition-shadow duration-700 hover:shadow-black/50">
      <div className="relative w-full h-full">
        <Image
          src={member.image}
          alt={member.name}
          fill
          unoptimized
          className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105 opacity-100"
        />
      </div>

      {/* Stronger Bottom Gradient for text contrast */}
      <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/50 to-transparent opacity-100" />

      {/* Content Layer */}
      <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end">
        <div className="transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-2">
          <h3 className="text-3xl font-semibold text-white tracking-tight mb-1 drop-shadow-md">
            {member.name}
          </h3>
          <p className="text-xs font-bold tracking-[0.2em] text-white/50 uppercase mb-4">
            {member.role}
          </p>

          <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
            <div className="overflow-hidden">
              <p className="text-white/80 leading-relaxed text-sm max-w-xs pb-2 line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 drop-shadow-sm">
                {member.bio}
              </p>
            </div>
          </div>
        </div>

        {/* Socials Glass Pill */}
        <div className="absolute top-10 right-8 flex flex-col gap-3 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] delay-100">
          {member.socials.linkedin && (
            <a
              href={member.socials.linkedin}
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
            >
              <IconBrandLinkedin size={20} />
            </a>
          )}
          {member.socials.twitter && (
            <a
              href={member.socials.twitter}
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
            >
              <IconBrandTwitter size={20} />
            </a>
          )}
          {member.socials.mail && (
            <a
              href={`mailto:${member.socials.mail}`}
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
            >
              <IconMail size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function InsightCard({ post }: { post: BlogPostItem }) {
  return (
    <Link
      href={`/insights/${post.slug}`}
      className="group block relative h-[500px] w-full bg-[#0a0a0a] rounded-[48px] overflow-hidden shadow-2xl transition-shadow duration-700 hover:shadow-black/50"
    >
      <div className="relative h-full w-full">
        <Image
          src={post.image}
          alt={post.title}
          fill
          unoptimized
          className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105 opacity-70 group-hover:opacity-60"
        />
        {/* Stronger Bottom Gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/50 to-transparent" />
      </div>

      <div className="absolute inset-0 p-10 flex flex-col justify-between">
        {/* Top Tags */}
        <div className="flex items-center justify-between">
          <span className="px-3 py-1 rounded-full backdrop-blur-md border border-white/10 bg-white/5 text-[10px] font-bold tracking-[0.15em] text-white uppercase group-hover:bg-(--primary) group-hover:border-(--primary) transition-colors duration-500 shadow-sm">
            {post.category}
          </span>
          <span className="text-[10px] font-bold tracking-[0.15em] text-white/50 uppercase drop-shadow-md">
            {post.readingTime}
          </span>
        </div>

        {/* Bottom Content */}
        <div>
          <h3 className="text-3xl md:text-4xl font-medium tracking-tight text-white leading-[1.1] mb-4 transition-colors duration-500 drop-shadow-md">
            {post.title}
          </h3>

          <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] mb-0 group-hover:mb-6">
            <div className="overflow-hidden">
              <p className="text-white/80 text-sm leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 drop-shadow-sm">
                {post.description}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-sm font-medium text-white/60 group-hover:text-white transition-colors mt-2">
            <span>Read Article</span>
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-500">
              <IconArrowRight size={14} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export function CustomerStoryCard({ story }: { story: CustomerStoryItem }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 260;
  const isLong = story.quote.length > maxLength;

  const displayQuote =
    isLong && !isExpanded
      ? story.quote.slice(0, maxLength) + "..."
      : story.quote;

  return (
    <div className="py-8">
      <div className="relative overflow-hidden">
        {/* Decorative Quote Icon */}
        <div className="absolute top-8 right-8 md:top-12 md:right-12 text-black/5 rotate-12 pointer-events-none">
          <IconQuote className="w-24 h-24 md:w-40 md:h-40" />
        </div>

        <div className="relative z-10 p-6 md:p-8">
          <motion.div
            layout="position"
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="mb-8 md:mb-12"
          >
            <p className="text-lg md:text-3xl font-base leading-relaxed md:leading-[1.4] text-zinc-900 mb-6">
              “{displayQuote}”
            </p>

            {isLong && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(!isExpanded);
                }}
                className="group flex items-center gap-2 text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 hover:text-black transition-colors"
              >
                <span className="w-6 h-px bg-zinc-200 group-hover:w-10 group-hover:bg-black transition-all" />
                {isExpanded ? "Show less" : "Read more"}
              </button>
            )}
          </motion.div>

          <div className="flex items-center gap-4 md:gap-8">
            <div className="relative group/avatar">
              <div className="absolute inset-0 bg-zinc-100 rounded-full scale-110 blur-md opacity-0 group-hover/avatar:opacity-100 transition-opacity duration-700" />
              <div className="relative w-14 h-14 md:w-20 md:h-20 rounded-full overflow-hidden border-2 md:border-4 border-white shadow-lg grayscale group-hover/avatar:grayscale-0 transition-all duration-700">
                <Image
                  src={story.image}
                  alt={story.author}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <h4 className="text-xl md:text-2xl font-medium text-zinc-900 tracking-tight">
                {story.author}
              </h4>
              <p className="text-xs md:text-sm font-mono uppercase tracking-widest text-zinc-400 mt-1">
                {story.company}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
