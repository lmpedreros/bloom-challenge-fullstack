
import { getBrandById, getBrands } from '@/services/api';
import { FAQ } from '@/app/(components)/FAQ';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function BrandDetailPage({ params }: { params: { id: string } }) {
  const resolvedParams = await params;
  const brandId = resolvedParams.id;
  const brand = await getBrandById(brandId);
  
  if (!brand) {
    notFound();
  }
  
  return (
    <div className="container mx-auto p-4">
      <div className="mb-6">
        <Link 
          href="/brands" 
          
          className="inline-flex items-center px-4 py-2 border border-white/30 rounded-lg text-white font-medium 
             transition-all duration-300 
             hover:bg-white/10 hover:shadow-lg hover:border-white/50"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 mr-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10 19l-7-7m0 0l7-7m-7 7h18" 
            />
          </svg>
          Volver a marcas
        </Link>
      </div>
      
      <h1 className="text-3xl font-bold mb-6 text-center">{brand.name}</h1>
      <FAQ brandId={brandId} brandData={brand} />
    </div>
  );
}

export async function generateStaticParams() {
  const brands = await getBrands();
  
  return brands.map((brand) => ({
    id: brand.id,
  }));
}