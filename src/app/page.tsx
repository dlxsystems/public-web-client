"use client";

import { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";

import { caseStudies, services, blogPosts, team, stats } from "./config/data";
import { Story } from "./components/story.component";

import {
  SectionBadge,
  SectionTitle,
  SectionHeader,
} from "./components/ui/section.component";
import { ParallaxWrapper, RevealWrapper } from "./components/ui/animation-wrappers";
import {
  ServiceCard,
  WorkCard,
  TeamCard,
  InsightCard,
  ServiceItem,
  CaseStudyItem,
  TeamMemberItem,
  BlogPostItem,
} from "./components/ui/cards.component";
import Link from "next/link";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const springValue = useSpring(0, { stiffness: 50, damping: 20, mass: 1 });
  const displayValue = useTransform(springValue, (current) =>
    Math.floor(current).toLocaleString()
  );

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  return (
    <p
      ref={ref}
      className="text-6xl md:text-8xl font-semibold tracking-tighter mb-4 bg-clip-text text-transparent bg-linear-to-b from-black to-black/50"
    >
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </p>
  );
}

export default function Home() {
  const { scrollY } = useScroll();

  const framePadding = useTransform(scrollY, [0, 300], ["12px", "36px"]);
  const frameY = useTransform(scrollY, [0, -100], ["0px", "-24px"]);
  const frameRadius = useTransform(scrollY, [0, 350], ["8px", "20px"]);

  const textExitY = useTransform(scrollY, [200, 420], [0, 120]);
  const textMaskOpacity = useTransform(scrollY, [200, 420], [0, 1]);
  const indicatorOpacity = useTransform(scrollY, [0, 120], [1, 0]);
  const videoOpacity = useTransform(scrollY, [0, 800], [1, 0]);

  return (
    <div className="relative">
      {/* HERO SECTION */}
      <section className="relative">
        <motion.div
          style={{ padding: framePadding, opacity: videoOpacity }}
          className="fixed inset-0 z-0 pointer-events-none"
        >
          <motion.div
            style={{ y: frameY, borderRadius: frameRadius }}
            className="relative h-full overflow-hidden"
          >
            <video
              src="/assets/videos/home-intro2.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/65" />

            <motion.div
              style={{ y: textExitY }}
              className="absolute bottom-32 left-6 right-6 md:bottom-24 md:left-24 md:right-auto max-w-xl text-white"
            >
              <h1 className="text-5xl md:text-8xl font-semibold mb-6 tracking-tighter leading-[0.9]">
                We build systems <br />
                <span className="text-white/40 italic font-light">that scale ideas.</span>
              </h1>

              <p className="text-lg text-white/80 leading-relaxed mb-6">
                Clean architecture, thoughtful engineering, and long-term
                impact. We help teams design and deliver systems that grow with
                confidence.
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link
                  href="/about"
                  title="Learn more about DLX Systems"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 text-sm font-medium text-white hover:bg-white/10 hover:border-white transition-all cursor-pointer"
                >
                  Learn more
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              style={{ opacity: textMaskOpacity }}
              className="
                absolute inset-x-0 bottom-20 h-[120vh]
                bg-linear-to-b from-transparent to-transparent
                pointer-events-none
              "
            />
          </motion.div>
        </motion.div>

        <motion.div
          style={{ opacity: indicatorOpacity }}
          className="fixed bottom-10 left-1/2 z-20 -translate-x-1/2 text-white/70"
        >
          <div className="flex flex-col items-center gap-2 text-xs tracking-widest">
            <span>SCROLL</span>
            <div className="h-6 w-px bg-white/50" />
          </div>
        </motion.div>

        <div className="relative z-10 h-screen" />

        {/* STATS SECTION */}
        <section className="relative z-30 bg-transparent py-20 md:py-40">
          <div className="mx-auto px-6 md:px-12 max-w-7xl">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16 text-center"
            >
              {stats.map((stat, index) => (
                <div key={index}>
                  <Counter value={stat.value} suffix={stat.suffix} />
                  <p className="text-sm md:text-base font-medium text-black/60 leading-relaxed max-w-[200px] mx-auto">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FIRST CONTENT SECTION — WHAT WE BUILD */}
        <motion.section
          id="expertise"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="relative z-30 bg-transparent py-16 md:py-32 rounded-t-3xl"
        >
          <div className="mx-auto px-10 md:px-32 text-black">
            <SectionHeader>
              <SectionBadge>OUR EXPERTISE</SectionBadge>
              <ParallaxWrapper offset={30}>
                <SectionTitle className="mb-8 text-shimmer">What we offer</SectionTitle>
              </ParallaxWrapper>
            </SectionHeader>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {services.map((service) => (
                  <ServiceCard
                    key={service.id}
                    service={service as ServiceItem}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* CUSTOMER STORIES — CAROUSEL */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative z-30 bg-transparent py-16 md:py-32"
        >
          <div className="mx-auto px-10 md:px-32 text-black">
            <SectionHeader className="mb-10">
              <SectionBadge>CLIENT STORIES</SectionBadge>
              <ParallaxWrapper offset={40}>
                <SectionTitle className="text-4xl md:text-7xl text-shimmer">
                  What our clients say
                </SectionTitle>
              </ParallaxWrapper>
            </SectionHeader>

            <Story />
          </div>
        </motion.section>

        {/* CASE STUDIES */}
        <motion.section
          id="work"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative z-30 bg-transparent py-16 md:py-32"
        >
          <div className="mx-auto px-10 md:px-32 text-black">
            <SectionHeader>
              <SectionBadge>CASE STUDIES</SectionBadge>
              <ParallaxWrapper offset={30}>
                <SectionTitle className="text-shimmer">Recent Work</SectionTitle>
              </ParallaxWrapper>
            </SectionHeader>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {caseStudies.map((study) => (
                <WorkCard
                  key={study.id}
                  study={study as unknown as CaseStudyItem}
                />
              ))}
            </div>
          </div>
        </motion.section>

        {/* TEAM SECTION */}
        <motion.section
          id="team"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative z-30 bg-transparent py-16 md:py-32 border-t border-black/5"
        >
          <div className="px-10 md:px-32 text-black max-w-7xl mx-auto">
            <SectionHeader className="mx-auto text-center flex flex-col items-center">
              <SectionBadge>TEAM</SectionBadge>
              <ParallaxWrapper offset={20}>
                <SectionTitle className="text-shimmer">Leadership</SectionTitle>
              </ParallaxWrapper>
            </SectionHeader>

            <div className="flex flex-wrap justify-center gap-12 md:gap-20">
              {team.map((member) => (
                <TeamCard
                  key={member.name}
                  member={member as unknown as TeamMemberItem}
                />
              ))}
            </div>
          </div>
        </motion.section>

        {/* INSIGHTS / BLOG */}
        <motion.section
          id="insights"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative z-30 bg-transparent py-16 md:py-32 border-t border-black/5"
        >
          <div className="mx-auto px-10 md:px-32 text-black">
            <header className="mb-24 flex flex-col items-start gap-6 md:flex-row md:justify-between md:items-end">
              <div className="max-w-4xl">
                <SectionBadge className="px-3">Insights</SectionBadge>
                <ParallaxWrapper offset={30}>
                  <SectionTitle className="text-shimmer">How we think</SectionTitle>
                </ParallaxWrapper>
              </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {(blogPosts as unknown as BlogPostItem[]).map((post) => (
                <InsightCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </motion.section>
      </section>
    </div>
  );
}
