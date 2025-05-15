// /src/app/brands/page.tsx
import Link from 'next/link';
import { getBrands } from '@/services/api';

export default async function BrandsPage() {
  const brands = await getBrands();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Selecciona una Marca</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {brands.map((brand) => (
          <Link 
            key={brand.id} 
            href={`/brands/${brand.id}`}
            className="block p-4 border border-white/30 rounded-lg text-white font-medium 
             transition-all duration-300 
             hover:bg-white/10 hover:shadow-lg hover:border-white/50"
          >
              <h2 className="font-bold text-lg">{brand.name}</h2>
            
          </Link>
        ))}
      </div>
    </div>
  );
}