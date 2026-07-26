import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-10">
      {/* Gradient Blobs */}

      <div className="absolute -top-32 left-10 h-72 w-72 rounded-full bg-violet-600/20 blur-[120px]" />

      <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-blue-600/20 blur-[140px]" />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-5xl text-center px-6"
      >
        <span className="inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
          AI Powered Image Retrieval
        </span>

        <h1 className="mt-6 text-5xl md:text-7xl font-black leading-tight text-white">
          Find Images
          <br />
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
            Discover Similarity
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400">
          Upload an image and let OpenCLIP search thousands of artwork
          embeddings to instantly discover visually similar images.
        </p>
      </motion.div>
    </section>
  );
}
