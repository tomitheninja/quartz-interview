'use client';
import {
  Button,
  FormControl,
  FormLabel,
  Image,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { FormEvent, useState } from 'react';

import { UploadFileResponse } from '@/platyzi';

export interface CreateProductFormState {
  title: string;
  price: number;
  description: string;
  categoryId?: number;
  images: string[];
}

export function CreateProductForm({
  handleSubmit,
  categories,
  uploadImage,
  initialData = {
    title: '',
    description: '',
    price: 0,
    images: [],
  },
}: {
  handleSubmit: (
    e: FormEvent<HTMLFormElement>,
    state: CreateProductFormState,
  ) => any;
  categories: { id: number; name: string }[];
  uploadImage: (file: File) => Promise<UploadFileResponse>;
  initialData?: CreateProductFormState;
}) {
  const [formData, setFormData] = useState<CreateProductFormState>(initialData);
  const [uploadedImages, setUploadedImages] = useState([]);

  function setField<T extends keyof CreateProductFormState>(
    name: T,
    value: CreateProductFormState[T],
  ) {
    setFormData((curr) => ({ ...curr, [name]: value }));
  }

  const category =
    (formData.categoryId &&
      categories.filter((c) => c.id === formData.categoryId).at(0)) ||
    null;

  return (
    <form onSubmit={(e) => handleSubmit(e, formData)}>
      <VStack spacing={4} align="stretch">
        <FormControl id="title">
          <FormLabel>Title</FormLabel>
          <Input
            type="text"
            name="title"
            value={formData.title}
            onChange={(e) => setField('title', e.target.value)}
            required
          />
        </FormControl>
        <FormControl id="price">
          <FormLabel>Price</FormLabel>
          <NumberInput
            onChange={(valueString) =>
              setField(
                'price',
                Number.parseFloat(valueString.replace('$', '')) || 0,
              )
            }
            value={'$' + formData.price}
            min={0.01}
            step={0.01}
            max={1000}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <FormControl id="description">
          <FormLabel>Description</FormLabel>
          <Textarea
            name="description"
            value={formData.description}
            onChange={(e) => setField('description', e.target.value)}
            required
          />
        </FormControl>
        <FormControl id="categoryId">
          <FormLabel>Category</FormLabel>
          <Select
            placeholder="Select option"
            required
            value={formData.categoryId}
            onChange={(e) =>
              setField('categoryId', Number.parseInt(e.target.value, 10))
            }
          >
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl id="images">
          <FormLabel>Images</FormLabel>
          <Input
            type="file"
            name="images"
            multiple
            onChange={() => {}}
            accept="image/*"
          />
        </FormControl>
        <VStack spacing={4} align="stretch">
          {uploadedImages.map((image, index) => (
            <Image
              alt="image preview"
              key={index}
              src={image}
              maxH="200px"
              objectFit="cover"
            />
          ))}
        </VStack>
        <Button type="submit" colorScheme="blue" mt={4}>
          Submit
        </Button>
      </VStack>
    </form>
  );
}
