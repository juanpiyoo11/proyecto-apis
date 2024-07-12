import {
  Heading,
  Flex,
  Image,
  Box,
  Text,
  Grid,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  SkeletonCircle,
  SkeletonText,
  Card,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "./js/productServices.js";
import Carrito from "./component/carrito.jsx";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const defaultImage = 'https://media.istockphoto.com/id/1055079680/vector/black-linear-photo-camera-like-no-image-available.jpg?s=612x612&w=0&k=20&c=P1DebpeMIAtXj_ZbVsKVvg-duuL0v9DlrOZUvPG6UJk='; // URL de la imagen por defecto

  useEffect(() => {
    getProductById(id).then((data) => {
      setProduct(data);
      setIsLoaded(true);
    }).catch(error => {
      console.error('Error fetching product:', error);
    });
  }, [id]);

  return isLoaded ? (
    <Card>
      <Flex className="ContieneTodo" height="75vh" width="95vw" alignItems="center" justifyContent="center">
        <Flex className="Imagenes" padding={9} pt={0}>
          <Box w="650px" h="650px">
            <Image 
              boxSize="80%" 
              mt="5rem" 
              src={product && product.image ? product.image: defaultImage} 
              alt={product && product.name ? product.name : 'Producto sin nombre'} 
            />
          </Box>
        </Flex>

        <Flex className="Detalles" display="grid">
          <Heading className="NombreProducto" as="h1" size="2xl">
            {product && product.name}
          </Heading>
          <Text className="DescripcionCorta" fontSize="4xl">
            {product && product.brand}
          </Text>
          <Heading className="Precio" as="h2" size="lg" mb="10">
            $ {product && product.price}
          </Heading>

          <Text className="Talles" fontSize="2xl">
            Talles
          </Text>
          <Grid templateColumns="repeat(5, 1fr)" gap={6} pb="5">
            <Button colorScheme="gray" variant="outline">
              7 US
            </Button>
            <Button colorScheme="gray" variant="outline">
              7.5 US
            </Button>
            <Button colorScheme="gray" variant="outline">
              8 US
            </Button>
            <Button colorScheme="gray" variant="outline">
              8.5 US
            </Button>
            <Button colorScheme="gray" variant="outline">
              9 US
            </Button>
            <Button colorScheme="gray" variant="outline">
              9.5 US
            </Button>
            <Button colorScheme="gray" variant="outline">
              10 US
            </Button>
            <Button colorScheme="gray" variant="outline">
              10.5 US
            </Button>
            <Button colorScheme="gray" variant="outline">
              11 US
            </Button>
            <Button colorScheme="gray" variant="outline">
              12 US
            </Button>
          </Grid>

          <Text className="Cantidad" fontSize="2xl">
            Cantidad
          </Text>
          <NumberInput className="seleccionaCantidad" defaultValue={0} min={0} max={10} mb="5" w="xs">
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>

          {<Carrito product={product} />}
        </Flex>
      </Flex>
    </Card>
  ) : (
    <Box padding="6" boxShadow="lg" bg="white">
      <SkeletonCircle size="10" />
      <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
    </Box>
  );
}

export default ProductDetail;
