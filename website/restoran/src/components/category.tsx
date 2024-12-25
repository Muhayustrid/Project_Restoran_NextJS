import { fetchCategories } from '@/lib/api';

export default async function Category() {
  const categories = await fetchCategories();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Daftar Kategori</h1>
      {categories.map((category) => (
        <div key={category.id} className="mb-8">
          <div
            className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="p-2">
              <h3 className="text-xl font-bold">{category.name}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
