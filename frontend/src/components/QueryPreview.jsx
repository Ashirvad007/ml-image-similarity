export default function QueryPreview({ file }) {
  if (!file) {
    return (
      <div className="flex h-72 items-center justify-center rounded-3xl border border-dashed border-white/10 bg-white/5 text-slate-400">
        No image selected
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
      <img
        src={URL.createObjectURL(file)}
        alt="Query"
        className="h-72 w-full object-cover"
      />
    </div>
  );
}