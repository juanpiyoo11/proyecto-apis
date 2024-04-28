import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { BiLike,BiChat,BiShare } from "react-icons/bi";
import { Image } from '@chakra-ui/react'
import { MdOutlinePayment } from "react-icons/md";
import { MdCancel } from "react-icons/md";



import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'



export default function CardCompo() {
  return (
    <Card maxW='xl'>
    <CardHeader>
      <Flex spacing='4'>
        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
  
          <Box>
            <Heading size='sm'>Chequemos tu carrito</Heading>
            <Text>Estos son los productos de tu carrito</Text>
          </Box>
        </Flex>
        <IconButton
          variant='ghost'
          colorScheme='gray'
          aria-label='See menu'
          icon={<BsThreeDotsVertical />}
        />
      </Flex>
    </CardHeader>
    <CardBody>
    <TableContainer>
      <Table variant='striped' colorScheme='teal'>
        <TableCaption>Productos en carrito</TableCaption>
          <Thead>
            <Tr>
              <Th>Prooducto</Th>
              <Th>Cantidad</Th>
              <Th isNumeric>Precio</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Adidas Airforce</Td>
              <Td>1</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
            <Tr>
              <Td>Adidas Airforce</Td>
              <Td>1</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>Adidas Airforce</Td>
              <Td>1</Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Producto</Th>
              <Th>Cantidad</Th>
              <Th isNumeric>Precio</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </CardBody>
  
    <CardFooter
      justify='space-between'
      flexWrap='wrap'
      sx={{
        '& > button': {
          minW: '136px',
        },
      }}
    >
      <Button flex='1' variant='ghost' colorScheme='green' leftIcon={<MdOutlinePayment />}>
        Payment
      </Button>
      <Button flex='1' variant='ghost' colorScheme='red' leftIcon={<MdCancel />}>
        Cancel payment
      </Button>
    </CardFooter>
  </Card>
  );
}
