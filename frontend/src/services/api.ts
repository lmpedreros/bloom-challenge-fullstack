import { Brand } from '../types/brands';

const API_URL = 'http://localhost:8000';

export async function getBrands(): Promise<Brand[]> {
  try {
    const response = await fetch(`${API_URL}/brands`, { cache: 'no-store' });
    
    if (!response.ok) {
      throw new Error('Error fetching brands');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error in getBrands:', error);
    return [];
  }
}

export async function getBrandById(id: string): Promise<Brand | null> {
  try {
    const response = await fetch(`${API_URL}/brands/${id}`, { cache: 'no-store' });
    
    if (!response.ok) {
      throw new Error('Error fetching brand');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error in getBrandById:', error);
    return null;
  }
}