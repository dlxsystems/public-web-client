"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export function BackgroundParallax() {
  const { scrollY } = useScroll();
  
  // Create parallax values for different blobs
  const y1 = useTransform(scrollY, [0, 5000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 5000], [0, 150]);
  const y3 = useTransform(scrollY, [0, 5000], [0, -100]);
  const scale = useTransform(scrollY, [0, 5000], [1, 1.1]);

  // Smooth out the motion
  const smY1 = useSpring(y1, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const smY2 = useSpring(y2, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const smY3 = useSpring(y3, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none -z-50 bg-white">
      <motion.div 
        style={{ y: smY1, scale }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-50/80 rounded-full blur-[120px] mix-blend-multiply opacity-50 animate-pulse" 
      />
      <motion.div 
        style={{ y: smY2, scale }}
        className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-emerald-50/80 rounded-full blur-[120px] mix-blend-multiply opacity-50 animate-pulse delay-700" 
      />
      <motion.div 
        style={{ y: smY3, scale }}
        className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] bg-sky-50/80 rounded-full blur-[120px] mix-blend-multiply opacity-50 animate-pulse delay-1000" 
      />
    </div>
  );
}
