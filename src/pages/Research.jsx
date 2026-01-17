import PageWrapper from "../components/PageWrapper";

export default function Research() {
  return (
    <PageWrapper>
      <section className="w-full py-24 bg-white">
        <div className="max-w-[1100px] mx-auto px-16">
          <h2 className="text-3xl font-semibold mb-8">
            Research & Insights
          </h2>

          <div className="space-y-6 text-slate-700">
            <p>
              Our research integrates principles from game theory, behavioral
              science, and market microstructure to interpret evolving market
              dynamics.
            </p>

            <p>
              We prioritize clarity, robustness, and long-horizon relevance
              over short-term commentary.
            </p>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
