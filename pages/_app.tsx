import type { AppProps } from 'next/app'
import {
  Box,
  ChakraProvider,
  Container,
  Text,
  Stack,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons'
import NextImage from 'next/image';
import theme from '../theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Box
        py="4"
        as="header"
        borderBottomWidth="1px"
        borderBottomColor="gray.200"
        mb={6}
      >
        <Container maxW="container.xl">
          <Stack direction="row" flexGrow="1" justifyContent="space-between">
            <Stack direction="row" alignItems="center" spacing="6">
              <Stack direction="row" alignItems="center">
                <Stack spacing="1">
                  {new Array(3).fill(1).map((item, idx) => (
                    <Box key={idx} w={6} h="3px" bgColor="gray.800" />
                  ))}
                </Stack>
                <Text textTransform="uppercase" fontSize="xs">
                  Menú
                </Text>
              </Stack>
              <InputGroup>
                <InputRightElement pointerEvents="none">
                  <SearchIcon color="gray.700" />
                </InputRightElement>
                <Input type="text" fontSize="sm" placeholder="Buscar" maxW="200px" />
              </InputGroup>
            </Stack>
            <NextImage
              src="/logo.svg"
              alt="La Nacion Logo"
              width="308"
              height="31.5"
            />
            <Stack direction="row" spacing="6" alignItems="center">
              <Button colorScheme="yellow" size="sm">
                Suscribete
              </Button>
              <Button colorScheme="blue" variant="outline" size="sm">
                Iniciar Sesión
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Box bgColor="gray.200">
        <Container maxW="container.xl">
          <Box bgColor="cyan.200" height="170px" />
        </Container>
      </Box>
      <Box as="main" py="6">
        <Container maxW="container.xl">
          <Grid gridTemplateColumns="9fr 3fr" gap="8">
            <GridItem>
              <Component {...pageProps} />
            </GridItem>
            <GridItem>
              <Box bgColor="cyan.200" height="100%" />
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default MyApp
