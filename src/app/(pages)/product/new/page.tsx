import { Box, Center } from '@chakra-ui/react';
import { FormEvent } from 'react';

import {
  CreateProductForm,
  CreateProductFormState,
} from '@/components/product/create-product-form';
import { PlatziApi } from '@/platyzi';

async function handleSubmit(
  e: FormEvent<HTMLFormElement>,
  formData: CreateProductFormState,
) {
  'use server';
  e.preventDefault();
}

async function handleImageUpload(file: File) {
  'use server';
  const worker = new PlatziApi();
  return await worker.uploadFile(file);
}

async function getData() {
  const worker = new PlatziApi();
  const categories = await worker.getAllCategories();
  return { categories };
}

export default async function Page() {
  const { categories } = await getData();

  return (
    <Center h="100vh">
      <Box
        maxW="lg"
        w="full"
        p={8}
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
      >
        <CreateProductForm
          handleSubmit={handleSubmit}
          uploadImage={handleImageUpload}
          categories={categories}
        />
      </Box>
    </Center>
  );
}
