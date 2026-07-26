import { motion } from "framer-motion";

export default function ResultCard({ item, index }) {
  const similarity = item.score ?? item.similarity ?? 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
    >
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt="Similar"
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        {index === 0 && (
          <div className="absolute left-4 top-4 rounded-full bg-violet-600 px-4 py-1 text-sm font-semibold text-white shadow-lg">
            ⭐ Best Match
          </div>
        )}
      </div>

      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-400">Similarity</span>

          <span className="rounded-full bg-violet-500/20 px-3 py-1 text-sm font-semibold text-violet-300">
            {(similarity * 100).toFixed(1)}%
          </span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${similarity * 100}%` }}
            transition={{ duration: 1 }}
            className="h-full rounded-full bg-gradient-to-r from-violet-500 to-blue-500"
          />
        </div>
      </div>
    </motion.div>
  );
}