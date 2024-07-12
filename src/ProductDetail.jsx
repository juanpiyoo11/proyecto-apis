import {
  Heading,
  Flex,
  Image,
  Box,
  Text,
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
  const [quantity, setQuantity] = useState(1); // Estado para almacenar la cantidad seleccionada
  const defaultImage = 'https://media.istockphoto.com/id/1055079680/vector/black-linear-photo-camera-like-no-image-available.jpg?s=612x612&w=0&k=20&c=P1DebpeMIAtXj_ZbVsKVvg-duuL0v9DlrOZUvPG6UJk='; // URL de la imagen por defecto

  useEffect(() => {
    getProductById(id)
      .then((data) => {
        setProduct(data);
        setIsLoaded(true);
      })
      .catch(error => {
        console.error('Error fetching product:', error);
      });
  }, [id]);

  const handleQuantityChange = (valueString, valueNumber) => {
    if (valueNumber > product.stock) {
      // Ajustar la cantidad si supera el stock disponible
      setQuantity(product.stock); // Ajusta la cantidad al máximo disponible
    } else {
      setQuantity(valueNumber); // Actualiza la cantidad seleccionada
    }
  };

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
            Categoria: {product && product.category}
          </Text>

          <Text className="Talles" fontSize="2xl">
            Color: {product && product.color}
          </Text>

          <Text className="Talles" fontSize="2xl">
            Talle: {product && product.size}
          </Text>

          <Text className="Talles" fontSize="2xl">
            Sexo: {product && product.sex}
          </Text>



          {/* Pasa product y quantity como props al componente Carrito */}
          <Carrito product={product}/>
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
