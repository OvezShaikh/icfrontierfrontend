import PageWrapper from "../components/PageWrapper";

export default function FAQ() {
  return (
    <PageWrapper>
      <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>

      <div className="space-y-4 max-w-2xl">
        <div className="p-4 bg-white shadow rounded">
          <h4 className="font-semibold">Do you offer custom packages?</h4>
          <p className="text-gray-600">Yes, fully customized travel plans.</p>
        </div>
      </div>
    </PageWrapper>
  );
}
