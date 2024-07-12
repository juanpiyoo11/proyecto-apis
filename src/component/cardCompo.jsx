import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Box,
  Text,
  Heading,
  Table,
  TableCaption,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Input,
  RadioGroup,
  Radio,
  Stack,
} from "@chakra-ui/react";
import { obtenerItemsCarrito } from "../js/carritoService.js";

export default function CardCompo({ products, cuponDescuento, setCuponDescuento }) {
  const [productos, setProductos] = useState([]);
  const [medioPago, setMedioPago] = useState("");
  const [tarjeta, setTarjeta] = useState({
    numero: "",
    nombre: "",
    fecha: "",
    cvv: "",
  });

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

  const descuentoCupon = () => {
    const cupon = cuponDescuento.toLowerCase(); // Convertir a minúsculas para comparación
    if (cupon === "cupon5") {
      return total * 0.05;
    } else {
      return 0; // No se aplica descuento si el cupón no es válido
    }
  };

  const descuento = descuentoCupon();
  const totalConDescuento = total - descuento;

  const handleChangeCupon = (event) => {
    setCuponDescuento(event.target.value);
  };

  const handleMedioPagoChange = (value) => {
    setMedioPago(value);
  };

  const handleTarjetaChange = (event) => {
    const { name, value } = event.target;
    setTarjeta((prevTarjeta) => ({
      ...prevTarjeta,
      [name]: value,
    }));
  };

  return (
    <Card maxW="xl">
      <CardHeader>
        <Flex spacing="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Box>
              <Heading size="sm">Veamos tu carrito</Heading>
              <Text>Estos son los productos de tu carrito</Text>
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <Table variant="striped" colorScheme="teal">
          <TableCaption></TableCaption>
          <Thead>
            <Tr>
              <Th>Producto</Th>
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
            <Tr>
              <Th>
                <Input
                  placeholder="Cupón de descuento"
                  value={cuponDescuento}
                  onChange={handleChangeCupon}
                />
              </Th>
            </Tr>
          </Tfoot>
        </Table>
        <Box mt="4">
          <Text fontSize="lg" fontWeight="bold">Selecciona el medio de pago</Text>
          <RadioGroup onChange={handleMedioPagoChange} value={medioPago}>
            <Stack direction="row">
              <Radio value="debito">Tarjeta de Débito</Radio>
              <Radio value="credito">Tarjeta de Crédito</Radio>
              <Radio value="efectivo">Efectivo</Radio>
            </Stack>
          </RadioGroup>
          {(medioPago === "debito" || medioPago === "credito") && (
            <Box mt="4">
              <Text fontSize="lg" fontWeight="bold">Datos de la tarjeta</Text>
              <Input
                placeholder="Número de tarjeta"
                name="numero"
                value={tarjeta.numero}
                onChange={handleTarjetaChange}
                mt="2"
              />
              <Input
                placeholder="Nombre en la tarjeta"
                name="nombre"
                value={tarjeta.nombre}
                onChange={handleTarjetaChange}
                mt="2"
              />
              <Input
                placeholder="Fecha de expiración"
                name="fecha"
                value={tarjeta.fecha}
                onChange={handleTarjetaChange}
                mt="2"
              />
              <Input
                placeholder="CVV"
                name="cvv"
                value={tarjeta.cvv}
                onChange={handleTarjetaChange}
                mt="2"
              />
            </Box>
          )}
        </Box>
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
