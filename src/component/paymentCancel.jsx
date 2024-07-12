import { useEffect, useState } from "react";
import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Slide, useDisclosure, useToast } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import CardCompo from "./cardCompo.jsx";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import { MdCancel, MdOutlinePayment } from "react-icons/md";
import { obtenerItemsCarrito } from "../js/carritoService.js";

export default function PaymentCancel() {
  const toast = useToast();

  return (
    <>
      <Button
        flex="1"
        variant="ghost"
        colorScheme="red"
        leftIcon={<MdCancel />}
        onClick={() => {
          toast({
            title: "Payment Cancelled.",
            description: "Payment Cancelled. Please try again.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }}
      >
        Cancelar
      </Button>
    </>
  );
}
