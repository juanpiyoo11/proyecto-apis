import {
    Heading,
    Flex,
    Input,
    Button,
    ButtonGroup,
    useColorMode,
    Image,
    Box,
    Text,
    Grid,
    GridItem,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper, SkeletonCircle, SkeletonText, Card
} from '@chakra-ui/react'
import {getProductById, getProducts} from "./js/productServices.js";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Carrito from "./component/carrito";


function PaginaProducto() {

    const {id} = useParams();
    const [product, setProducts] = useState()
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        getProductById(id)
            .then((data) => {
                setProducts(data);
                setIsLoaded(true);
            });
        console.log(product)
    }, []);

    return (
        isLoaded ?
            <Card>
                <Flex className='ContieneTodo' height="75vh" alignItems="center" justifyContent="center">

                    <Flex className='Imagenes' padding={9} pt={0}>
                        <Box w='650px' h='650px'>
                            <Image boxSize='650px' src={product.image} alt='Dan Abramov'/>
                        </Box>
                    </Flex>

                    <Flex className='Detalles' display="grid">
                        <Heading className='NombreProducto' as='h1' size='2xl'>{product.name}</Heading>
                        <Text className='DescripcionCorta' fontSize='4xl'>{product.brand}</Text>
                        <Heading className='Precio' as='h2' size='lg' mb='10'>$ {product.price}</Heading>

                        <Text className='Talles' fontSize='2xl'>Talles</Text>
                        <Grid templateColumns='repeat(5, 1fr)' gap={6} pb='5'>
                            <Button colorScheme='gray' variant='outline'>36 AR</Button>
                            <Button colorScheme='gray' variant='outline'>37 AR</Button>
                            <Button colorScheme='gray' variant='outline'>38 AR</Button>
                            <Button colorScheme='gray' variant='outline'>39 AR</Button>
                            <Button colorScheme='gray' variant='outline'>40 AR</Button>
                            <Button colorScheme='gray' variant='outline'>41 AR</Button>
                            <Button colorScheme='gray' variant='outline'>42 AR</Button>
                            <Button colorScheme='gray' variant='outline'>43 AR</Button>
                            <Button colorScheme='gray' variant='outline'>44 AR</Button>
                            <Button colorScheme='gray' variant='outline'>45 AR</Button>
                        </Grid>

                        <Text className='Cantidad' fontSize='2xl'>Cantidad</Text>
                        <NumberInput className='seleccionaCantidad' defaultValue={0} min={0} max={10} mb='5' w='xs'>
                            <NumberInputField/>
                            <NumberInputStepper>
                                <NumberIncrementStepper/>
                                <NumberDecrementStepper/>
                            </NumberInputStepper>
                        </NumberInput>

                        <Carrito product={product} />
                    </Flex>

                </Flex>
            </Card>
            :
            <Box padding='6' boxShadow='lg' bg='white'>
                <SkeletonCircle size='10'/>
                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2'/>
            </Box>
    );
}

export default PaginaProducto;