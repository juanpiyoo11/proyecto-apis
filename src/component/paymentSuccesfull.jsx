import { useEffect, useState } from "react";
import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Slide, useDisclosure, useToast } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import CardCompo from "./cardCompo.jsx";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import { MdCancel, MdOutlinePayment } from "react-icons/md";
import { limpiarCarrito, obtenerItemsCarrito } from "../js/carritoService.js";
import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../js/productServices.js";

export default function PaymentSuccesful() {
  const toast = useToast();

  return (
    <>
      <Button
        flex="1"
        variant="ghost"
        colorScheme="green"
        leftIcon={<MdOutlinePayment />}
        onClick={() => {
          toast({
            title: "Payment Succesful.",
            description: "Payment Succesful. Thank you for your purchase.",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          const carrito = obtenerItemsCarrito();
          {
            carrito.map((producto) => deleteProduct(producto.id));
          }
          limpiarCarrito();

          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }}
      >
        Payment Succesful
      </Button>
    </>
  );
}
