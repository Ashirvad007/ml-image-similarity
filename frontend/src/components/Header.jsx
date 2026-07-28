import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10"
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-8 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 shadow-lg shadow-violet-500/30">
            <Sparkles size={22} className="text-white" />
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-tight text-white">
              ImageSimilarity AI
            </h1>

            <p className="text-xs text-slate-400">Powered by OpenCLIP</p>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
