import { PlatziApi } from '@/platyzi';

export const dynamic = 'force-dynamic';

async function getData() {
  const platzi = new PlatziApi();
  return platzi.getAllProducts();
}

export default async function Home() {
  const products = await getData();

  return (
    <main>
      {JSON.stringify(products, null, 2)} {typeof products}
    </main>
  );
}
