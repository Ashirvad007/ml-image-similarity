import { useState } from "react";
import { UploadCloud } from "lucide-react";
import { motion } from "framer-motion";

export default function UploadArea({ onFileSelect }) {
  const [dragging, setDragging] = useState(false);

  const handleFile = (file) => {
    if (file && file.type.startsWith("image/")) {
      onFileSelect(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setDragging(false);

    if (e.dataTransfer.files.length > 0) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="mx-auto mt-10 max-w-5xl"
    >
      <label
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        className={`
          relative
          flex
          cursor-pointer
          flex-col
          items-center
          justify-center
          rounded-[32px]
          border-2
          border-dashed
          p-16
          transition-all
          duration-300
          backdrop-blur-xl

          ${
            dragging
              ? "border-violet-400 bg-violet-500/10 scale-[1.02]"
              : "border-white/20 bg-white/5 hover:border-violet-400"
          }
        `}
      >
        <motion.div
          animate={{
            scale: dragging ? 1.15 : 1,
          }}
        >
          <UploadCloud
            size={72}
            className="text-violet-400"
          />
        </motion.div>

        <h2 className="mt-6 text-3xl font-bold text-white">
          {dragging
            ? "Drop your image here"
            : "Drag & Drop Image"}
        </h2>

        <p className="mt-3 text-slate-400">
          or click anywhere to browse
        </p>

        <input
          type="file"
          accept="image/*"
          hidden
          onChange={(e) => {
            if (e.target.files[0]) {
              handleFile(e.target.files[0]);
            }
          }}
        />
      </label>
    </motion.div>
  );
}