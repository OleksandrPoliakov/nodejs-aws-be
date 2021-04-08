import products from './products.json';

interface Product {
  count: number;
  description: string;
  id: string;
  price: number;
  title: string;
}

export const loadProducts = async (): Promise<Product[]> => {
  return products;
};

export const loadProduct = async (id: string): Promise<Product> => {
  return products.find(({ id: productId }) => productId === id);
};
