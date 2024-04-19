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
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

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
      <Wrap>
        {products.map((product) => (
          <WrapItem key={product.id}>
            <Card maxW="sm">
              <CardBody>
                <Image
                  src={product.images[0] || 'https://i.imgur.com/1twoaDy.jpeg'}
                  alt="Photo of the product"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{product.title}</Heading>
                  <Text className="h-20 overflow-y-scroll">
                    {product.description.split('.')[0]}.
                  </Text>
                  <Flex>
                    <Text color="blue.600" fontSize="2xl">
                      ${product.price}
                    </Text>
                    <Spacer />
                    <Link href={`/product/${product.id}`}>
                      <Button variant="solid" colorScheme="blue">
                        View product
                      </Button>
                    </Link>
                  </Flex>
                </Stack>
                <ButtonGroup spacing="2"></ButtonGroup>
              </CardBody>
            </Card>
          </WrapItem>
        ))}
      </Wrap>
    </main>
  );
}
