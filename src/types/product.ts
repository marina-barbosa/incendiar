export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: 'lighter' | 'vape';
  featured?: boolean;
}