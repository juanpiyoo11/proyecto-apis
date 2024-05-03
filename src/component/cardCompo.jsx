import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { BiLike, BiChat, BiShare } from "react-icons/bi";
import { Image } from "@chakra-ui/react";
import { MdOutlinePayment } from "react-icons/md";
import { MdCancel } from "react-icons/md";

import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { obtenerItemsCarrito } from "../js/carritoService.js";

export default function CardCompo({ products }) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const itemsCarrito = obtenerItemsCarrito();
    setProductos(itemsCarrito);
  }, []);

  const productCounts = productos.reduce((acc, product) => {
    if (acc[product.name]) {
      acc[product.name].quantity += 1;
    } else {
      acc[product.name] = {
        name: product.name,
        price: product.price,
        quantity: 1,
      };
    }

    return acc;
  }, {});

  const productList = Object.values(productCounts);

  const total = productList.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);
  let totalConDescuento = total;
  let descuento = 0;
  if (total > 100000) {
    descuento = total * 0.05;
    totalConDescuento = total - descuento;
  }

  return (
    <Card maxW="xl">
      <CardHeader>
        <Flex spacing="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Box>
              <Heading size="sm">Chequemos tu carrito</Heading>
              <Text>Estos son los productos de tu carrito</Text>
            </Box>
          </Flex>
          <IconButton variant="ghost" colorScheme="gray" aria-label="See menu" icon={<BsThreeDotsVertical />} />
        </Flex>
      </CardHeader>
      <CardBody>
        <TableContainer>
          <Table variant="striped" colorScheme="teal">
            <TableCaption>Productos en carrito</TableCaption>
            <Thead>
              <Tr>
                <Th>Prooducto</Th>
                <Th>Cantidad</Th>
                <Th isNumeric>Precio</Th>
              </Tr>
            </Thead>
            <Tbody>
              {productList.map((product, index) => (
                <Tr key={index}>
                  <Td>{product.name}</Td>
                  <Td>{product.quantity}</Td>
                  <Td isNumeric>{product.price}</Td>
                </Tr>
              ))}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>Total</Th>
                <Th></Th>
                <Th isNumeric>{total}</Th>
              </Tr>
              {total > 100000 && (
                <>
                  <Tr>
                    <Th>Descuento (5%)</Th>
                    <Th></Th>
                    <Th isNumeric>-{descuento.toFixed(0)}</Th>
                  </Tr>
                  <Tr>
                    <Th>Total con descuento</Th>
                    <Th></Th>
                    <Th isNumeric>{totalConDescuento.toFixed(0)}</Th>
                  </Tr>
                </>
              )}
            </Tfoot>
          </Table>
        </TableContainer>
      </CardBody>

      <CardFooter
        justify="space-between"
        flexWrap="wrap"
        sx={{
          "& > button": {
            minW: "136px",
          },
        }}
      ></CardFooter>
    </Card>
  );
}
