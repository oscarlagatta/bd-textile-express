export interface Product {
  productId: number;
  productName: string;
  styleId: number;
  description: string;
  ean13?: string;
  base64?: string;
  length?: string;
  width?: number;
  depth?: number;
  weight?: number;
  leadTime?: number;
  manufacturingDays?: number;
  price: number;
}

export interface Item {
  product_id: number;
  quantity: number;
}
