import { Search } from "lucide-react";
import { motion } from "framer-motion";

export default function SearchButton({ onClick, loading, disabled }) {
  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.03 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      disabled={disabled || loading}
      onClick={onClick}
      className="
      w-full
      rounded-2xl
      bg-gradient-to-r
      from-violet-600
      to-blue-600
      px-8
      py-4
      text-lg
      font-semibold
      text-white
      shadow-xl
      transition
      disabled:cursor-not-allowed
      disabled:opacity-50
      "
    >
      <div className="flex items-center justify-center gap-3">
        <Search size={20} />

        {loading ? "Searching..." : "Search Similar Images"}
      </div>
    </motion.button>
  );
}