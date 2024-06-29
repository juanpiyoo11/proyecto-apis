import { useEffect, useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import CardCompo from "./cardCompo.jsx";

import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import { MdCancel, MdOutlinePayment } from "react-icons/md";
import PaymentCancel from "./paymentCancel.jsx";
import PaymentSuccesful from "./paymentSuccesfull.jsx";
import { getProducts } from "../js/productServices.js";
import { obtenerItemsCarrito } from "../js/carritoService.js";

export default function Checkout(products) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    products = obtenerItemsCarrito();
    //console.log(products.length !== 0 )
  }, [onOpen]);

  return (
    <>
      <Button onClick={onOpen}> Checkout </Button>

      <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Checkout</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CardCompo products={products}></CardCompo>
          </ModalBody>
          <ModalFooter>
            <PaymentSuccesful />
            <PaymentCancel />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
