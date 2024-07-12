import { useEffect, useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import CardCompo from "./cardCompo.jsx";

import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import PaymentCancel from "./paymentCancel.jsx";
import PaymentSuccesful from "./paymentSuccesfull.jsx";
import { obtenerItemsCarrito } from "../js/carritoService.js";

export default function Checkout() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const itemsCarrito = obtenerItemsCarrito();
    setProductos(itemsCarrito);
  }, [onOpen]);

  const handleCheckoutClick = () => {
    onOpen();
  };

  return (
    <>
      <Button onClick={handleCheckoutClick}>Checkout</Button>

      <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Checkout</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CardCompo products={productos} />
          </ModalBody>
          <ModalFooter>
            <PaymentSuccesful />
            {/* <PaymentCancel /> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
