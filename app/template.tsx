"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      // initial={{ y: -40, opacity: 0 }}
      // animate={{ y: 0, opacity: 1 }}
      // transition={{ ease: [0.2, 0, 0, 0.75], duration: 1 }}
    >
      {children}
    </motion.div>
  );
}
