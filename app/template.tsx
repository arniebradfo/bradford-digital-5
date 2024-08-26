"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return <AnimatePresence>{children}</AnimatePresence>;
}
