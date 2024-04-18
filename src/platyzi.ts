import type { UpdateProductDto } from './generated/platzi';

export interface ProductCategory {
  id: number;
  name: string;
  image: string;
}

const basePath =
  process.env.NEXT_PUBLIC_BACKEND_API || 'https://api.escuelajs.co/api/v1';

export class PlatziApi {
  async getAllProducts() {
    const products = await (await fetch(basePath + '/products')).json();
    return products as ({ category: ProductCategory } & Pick<
      UpdateProductDto,
      'title' | 'price' | 'description' | 'images'
    >)[];
  }
}
