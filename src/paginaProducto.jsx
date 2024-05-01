import {Heading, Flex, Input, Button,ButtonGroup, useColorMode, Image, Box, Text, Grid, GridItem, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from '@chakra-ui/react'

function PaginaProducto() {

  return (
    <Flex className='ContieneTodo' height = "75vh" alignItems="center" justifyContent= "center"> 

      <Flex className='Imagenes' padding={9} pt = {0}>
        <Box w = '650px' h = '650px'>
          <Image boxSize = '650px'  src='https://bit.ly/dan-abramov' alt='Dan Abramov'/>
        </Box>
      </Flex>

      <Flex className='Detalles' display= "grid">
        <Heading className='NombreProducto' as='h1' size='2xl'>Nombre del Producto</Heading>
        <Text className='DescripcionCorta' fontSize= '4xl'>Jordan</Text>
        <Heading className='Precio' as='h2' size='lg' mb = '10'>$100</Heading>

        <Text className='Talles' fontSize= '2xl' >Talles</Text>
        <Grid templateColumns='repeat(5, 1fr)' gap={6} pb = '5'>
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

        <Text className='Cantidad' fontSize= '2xl' >Cantidad</Text>
        <NumberInput className = 'seleccionaCantidad' defaultValue={0} min={0} max={10} mb = '5' w= 'xs'>
          <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
        </NumberInput>
        
        <Button colorScheme='gray' w = '200px' >Agregar al Carrito</Button>
      </Flex>

    </Flex>
  );
}

export default PaginaProducto;