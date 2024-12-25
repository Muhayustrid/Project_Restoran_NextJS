import { fetchFAQs } from '@/lib/api';

export default async function faqPage() {
  const faqs = await fetchFAQs();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Daftar FAQ</h1>

      {faqs.map(faq => (
        <div key={faq.id} className="mb-8">
          <div
            className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="p-2">
              <h3 className="text-xl font-bold">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}