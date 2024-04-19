import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Link,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/react';
import { notFound } from 'next/navigation';

import { PlatziApi } from '@/platyzi';

export const dynamic = 'force-dynamic';

async function getData(id: string) {
  const platzi = new PlatziApi();
  return platzi.getProduct(id);
}

export default async function Home({ params }: { params: { id: string } }) {
  if (!Number.isInteger(Number.parseInt(params.id))) {
    notFound();
    return null;
  }
  const product = await getData(params.id);

  return (
    <main className="bg-red-300">
      <Link href="/" marginTop={4}>
        <Button colorScheme="teal" variant="primary">
          Go back
        </Button>
      </Link>
      <Card maxW="sm" key={product.id}>
        <CardBody>
          <Image
            src={product.images[0] || 'https://i.imgur.com/1twoaDy.jpeg'}
            alt="Photo of the product"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{product.title}</Heading>
            <Text className="h-20 overflow-y-scroll">
              {product.description}
            </Text>
            <Flex>
              <Text color="blue.600" fontSize="2xl">
                ${product.price}
              </Text>
              <Spacer />
              <Link href={`/product/${product.id}`}>
                <Button variant="solid" colorScheme="blue">
                  Add to card
                </Button>
              </Link>
            </Flex>
          </Stack>
          <ButtonGroup spacing="2"></ButtonGroup>
        </CardBody>
      </Card>
    </main>
  );
}
