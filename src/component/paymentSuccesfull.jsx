import { useToast, Button } from "@chakra-ui/react";
import { MdOutlinePayment } from "react-icons/md";
import { limpiarCarrito, obtenerItemsCarrito } from "../js/carritoService.js";
import { purchaseProducts } from "../js/productServices.js";
import { useSelector } from 'react-redux';

export default function PaymentSuccesful({ cuponDescuento }) {
  const token = useSelector(state => state.auth.token);
  const toast = useToast();
  const carrito = obtenerItemsCarrito();

  const handlePayment = () => {
    if (carrito.length === 0) {
      // Mostrar alerta si el carrito está vacío
      toast({
        title: "Carrito vacío",
        description: "Debes elegir productos antes de proceder con el pago.",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    const productos = carrito.map(item => ({
      productId: item.id,
    }));

    // Aquí puedes usar cuponDescuento y descuento
    purchaseProducts(productos, cuponDescuento, token);

    toast({
      title: "Pago exitoso",
      description: "¡Gracias por tu compra!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    limpiarCarrito();

    // Redirigir o hacer alguna otra acción después del pago
  };

  return (
    <Button
      flex="1"
      variant="ghost"
      colorScheme="green"
      leftIcon={<MdOutlinePayment />}
      onClick={handlePayment}
    >
      Comprar
    </Button>
  );
}
