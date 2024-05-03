import {useEffect, useState} from "react"
import {Alert, AlertDescription, AlertIcon, AlertTitle, Box, Slide, useDisclosure} from '@chakra-ui/react'

import {Button, ButtonGroup} from '@chakra-ui/react'
import CardCompo from "./cardCompo.jsx"

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import {MdCancel, MdOutlinePayment} from "react-icons/md";
import {obtenerItemsCarrito} from "../js/carritoService.js";


export default function PaymentSuccesful() {

    const { isOpen, onToggle } = useDisclosure()

    var isDisabled = true;

    useEffect(() => {
        let products = obtenerItemsCarrito();
        isDisabled=products.length !== 0
    },[]);

    return (
        <>

            <Button flex='1' variant='ghost' colorScheme='green' leftIcon={<MdOutlinePayment />} isDisabled={isDisabled} onClick={onToggle}>Payment
            </Button>
            <Slide direction='bottom' in={isOpen} style={{ zIndex: 10 }}>
                <Box
                    p='40px'
                    color='white'
                    mt='4'
                    bg='teal.500'
                    rounded='md'
                    shadow='md'
                >
                    Payment Successful. Thank you for your purchase
                </Box>
            </Slide>

        </>
    )
}
