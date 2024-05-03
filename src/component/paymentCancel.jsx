import {useEffect, useState} from "react"
import {Alert, AlertDescription, AlertIcon, AlertTitle, useDisclosure} from '@chakra-ui/react'

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


export default function PaymentCancel() {

    const {isOpen, onOpen, onClose} = useDisclosure()

    useEffect(() => {
        onOpen();
    }, []);

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <Alert
                    status='error'
                    variant='subtle'
                    flexDirection='column'
                    alignItems='center'
                    justifyContent='center'
                    textAlign='center'
                    height='200px'
                >
                    <AlertIcon boxSize='40px' mr={0}/>
                    <AlertTitle mt={4} mb={1} fontSize='lg'>
                        Payment Cancelled
                    </AlertTitle>
                    <AlertDescription maxWidth='sm'>
                        Your payment has been cancelled. Please try again.
                    </AlertDescription>
                </Alert>
            </Modal>
        </>
    )
}
