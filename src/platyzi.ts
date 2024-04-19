import type { UpdateProductDto } from './generated/platzi';

export interface ProductCategory {
  id: number;
  name: string;
  image: string;
}

export type Product = { id: string; category: ProductCategory } & Pick<
  UpdateProductDto,
  'title' | 'price' | 'description' | 'images'
>;
export interface UploadFileResponse {
  originalname: string;
  filename: string;
  location: string;
}

const basePath =
  process.env.NEXT_PUBLIC_BACKEND_API || 'https://api.escuelajs.co/api/v1';

export class PlatziApi {
  async getAllProducts(): Promise<Product[]> {
    return await (await fetch(basePath + '/products')).json();
  }

  async getProduct(id: string): Promise<Product> {
    return await (await fetch(basePath + '/products/' + id)).json();
  }

  async getAllCategories(): Promise<ProductCategory[]> {
    return await (await fetch(basePath + '/categories')).json();
  }

  async uploadFile(file: File): Promise<UploadFileResponse> {
    const formData = new FormData();
    formData.append('file', file);
    return await (
      await fetch(basePath, {
        method: 'POST',
        body: formData,
      })
    ).json();
  }
}
