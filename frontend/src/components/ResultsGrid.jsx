import ResultCard from "./ResultCard";

export default function ResultsGrid({ results }) {
  if (!results.length) return null;

  return (
    <section className="mx-auto mt-16 max-w-7xl">
      <h2 className="mb-8 text-3xl font-bold text-white">
        Similar Images
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {results.map((item, index) => (
          <ResultCard
            key={index}
            item={item}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}