import {useEffect, useState} from "react"
import {useDisclosure} from '@chakra-ui/react'
import {Button} from '@chakra-ui/react'
import {agregarItemCarrito, obtenerItemsCarrito, quitarItemCarrito} from '../js/carritoService.js';

export default function Carrito({product}) {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const [carrito, setCarrito] = useState([])
    const [productoExiste, setProductoExiste] = useState(false)


    const existeEnCarrito = (idProducto) => {
        const carrito = obtenerItemsCarrito();
        return carrito.some(producto => producto.id === idProducto);
    }

    const agregarAlCarrito = () => {
        setCarrito(prevCarrito => {
            const updatedCarrito = [...prevCarrito, product];
            agregarItemCarrito(product);
            return updatedCarrito;
        });
        onOpen()
    }

    useEffect(() => {
        setProductoExiste(existeEnCarrito(product.id));
    }, [carrito]);

    return (
            <Button onClick={agregarAlCarrito} colorScheme='blue'> Add to Cart </Button>
    )
}