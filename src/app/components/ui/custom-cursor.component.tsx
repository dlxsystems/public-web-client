"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

export function CustomCursor() {
  const [cursorState, setCursorState] = useState<"default" | "hover" | "input" | "hidden">("default");
  const [isClicked, setIsClicked] = useState(false);
  const [clickPulse, setClickPulse] = useState(0);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Faster spring for the center dot
  const dotSpringConfig = { stiffness: 800, damping: 35, mass: 0.2 };
  const dotX = useSpring(cursorX, dotSpringConfig);
  const dotY = useSpring(cursorY, dotSpringConfig);

  // Slower, trailing spring for the outer ring (organic lag)
  const ringSpringConfig = { stiffness: 220, damping: 28, mass: 0.8 };
  const ringX = useSpring(cursorX, ringSpringConfig);
  const ringY = useSpring(cursorY, ringSpringConfig);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
  }, [cursorX, cursorY]);

  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target) return;

    const isInput = 
      target.tagName === 'INPUT' || 
      target.tagName === 'TEXTAREA' || 
      target.isContentEditable;

    const isInteractive = 
      target.tagName === 'A' || 
      target.tagName === 'BUTTON' || 
      target.closest('a') || 
      target.closest('button') ||
      target.getAttribute('role') === 'button' ||
      target.classList.contains('cursor-pointer');

    if (isInput) {
      setCursorState("input");
    } else if (isInteractive) {
      setCursorState("hover");
    } else {
      setCursorState("default");
    }
  }, []);

  useEffect(() => {
    const handleMouseDown = () => {
      setIsClicked(true);
      setClickPulse(prev => prev + 1);
    };
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setCursorState("hidden");
    const handleMouseEnter = () => setCursorState("default");

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [handleMouseMove, handleMouseOver]);

  // Don't show custom cursor on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Click Pulse Effect */}
      <AnimatePresence>
        {clickPulse > 0 && (
          <motion.div
            key={`pulse-${clickPulse}`}
            initial={{ x: cursorX.get(), y: cursorY.get(), scale: 0.5, opacity: 0.8 }}
            animate={{ scale: 3, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 rounded-full border border-white pointer-events-none z-100000 mix-blend-difference will-change-transform"
          />
        )}
      </AnimatePresence>

      {/* Outer Ring / Secondary Shape */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center pointer-events-none z-100000 mix-blend-difference will-change-transform"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            width: 32,
            height: 32,
            borderRadius: 9999,
            backgroundColor: "transparent",
            borderColor: "rgba(255, 255, 255, 0.15)",
            borderWidth: 1,
            opacity: cursorState === "hover" ? 0 : cursorState === "hidden" ? 0 : 1,
            scale: isClicked ? 0.9 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            mass: 0.5
          }}
          className="border border-solid"
        />
      </motion.div>

      {/* Main Circle / Dot - The primary indicator */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center pointer-events-none z-100000 mix-blend-difference will-change-transform"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            width: cursorState === "hover" ? 24 : 8,
            height: cursorState === "hover" ? 24 : 8,
            opacity: cursorState === "hidden" ? 0 : 1,
            scale: isClicked ? 0.8 : 1,
            backgroundColor: "#fff",
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 30,
            mass: 0.2
          }}
          className="rounded-full"
        />
      </motion.div>
    </>
  );
}
