
import { useState } from "react"
import { useDisclosure } from '@chakra-ui/react'

import { Button, ButtonGroup } from '@chakra-ui/react'
import  CardCompo  from "./cardCompo.jsx"

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'


export default function Checkout (products) {

    const { isOpen, onOpen, onClose } = useDisclosure()
    
    return (
        <>
        <Button onClick={onOpen}> Checkout </Button>
    
        <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
            <ModalOverlay />
                <ModalContent>
                <ModalHeader>Checkout</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <CardCompo></CardCompo>
                </ModalBody>
        
                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                    </Button>
                    <Button variant='ghost'>Secondary Action</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
        </>
        )
}