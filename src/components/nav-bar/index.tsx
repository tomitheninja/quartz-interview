import { Flex, Link } from '@chakra-ui/react';

export function NavBar() {
  return (
    <Flex
      align="center"
      bg="gray.800"
      color="white"
      height={10}
      paddingX={4}
      position="sticky"
      top={0}
      left={0}
      right={0}
      zIndex={100}
      justify="space-between"
    >
      <Link href="/">
        <span>Platyzi</span>
      </Link>

      <Flex gap={4}>
        <Link href="/">Products</Link>
        <Link href="/product/new">Create Product</Link>
      </Flex>
    </Flex>
  );
}
