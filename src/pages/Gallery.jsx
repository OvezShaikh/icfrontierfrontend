import PageWrapper from "../components/PageWrapper";

export default function Gallery() {
  return (
    <PageWrapper>
      <section className="w-full py-20">
        <div className="grid grid-cols-4 max-lg:grid-cols-3 max-sm:grid-cols-2 gap-2 px-2">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="h-56 bg-gray-300" />
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
