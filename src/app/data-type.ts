export interface Category {
  categoryId: number;
  categoryName: string;
  categoryDescription: string;
}
export interface Product {
  productId: number;
  productName: string;
  productDescription: string;
  price: number;
  category: string;
  keywords: string;
  imageUrl: string;
}
