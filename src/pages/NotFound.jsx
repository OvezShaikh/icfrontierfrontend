import PageWrapper from "../components/PageWrapper";

export default function NotFound() {
  return (
    <PageWrapper>
      <section className="w-full py-20 text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-gray-600 mt-4">Page not found</p>
      </section>
    </PageWrapper>
  );
}
