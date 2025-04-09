import { FilterSidebar, ProductGrid } from '@/components/sections';

export default function Shop() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Shop All</h1>
      <div className="flex gap-8">
        <FilterSidebar /> {/* Collapsible on mobile */}
        <ProductGrid columns={4} />
      </div>
    </div>
  );
}