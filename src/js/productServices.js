export const deleteProduct = (id, token) => {
    var requestOptions = {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${token}`,
            'accept': 'application/json', // Puedes ajustar esto según el tipo de respuesta esperada
            'Content-Type': 'application/json' // Si es necesario especificar el tipo de contenido
        }
    };

    return fetch(`https://backend-api-tpo-production.up.railway.app/products/${id}/inactivate`, requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al eliminar el producto');
            }
        })
        .then(result => console.log('Producto eliminado correctamente:', result))
        .catch(error => console.error('Error al eliminar producto:', error));
}   

export const getProducts = () => {
    return fetch("https://backend-api-tpo-production.up.railway.app/products")
        .then((response) => response.json())
        .catch(error => console.log('Error al obtener productos', error))
        .finally(() => console.log('promise is finished'));
}

export const getProductById = (id) => {
    return fetch(`https://backend-api-tpo-production.up.railway.app/products/${id}`)
        .then((response) => response.json())
        .catch(error => console.log('Error al obtener producto', error))
        .finally(() => console.log('promise is finished'));
}

export const getProductsBySeller = (token) => {
    if (!token) {
        console.error('Token de autenticación no proporcionado');
        return Promise.reject('Token de autenticación no proporcionado');
    }

    return fetch(`https://backend-api-tpo-production.up.railway.app/products/by-seller`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error('Error al obtener productos');
        }
        return response.json();
    })
    .catch(error => {
        console.error('Error al obtener productos', error);
        throw error;
    })
    .finally(() => console.log('Promesa finalizada'));
};


export const getProductsByNameBrand = async (query) => {
    try {
      const response = await fetch('https://backend-api-tpo-production.up.railway.app/products');
      const responseData = await response.json();
      
      // Extraer el array de productos de la respuesta
      const data = responseData.content;
  
      // Filtrar los productos según el query
      const filteredProducts = data.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.brand.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      );
      return filteredProducts;
    } catch (error) {
      console.error('Error al obtener los productos:', error);
      return [];
    }
  };

  export const getProductsFiltered= async (brand, category, name, minPrice, maxPrice) => {
    return fetch('backend-api-tpo-production.up.railway.app/products/filtered')
    .then((response) => response.json())
    .catch(error => console.log('Error al obtener productos filtrados', error))
    .finally(() => console.log('promise is finished'));
  };

export const createProduct = (token, brand, category, name, price, size, color, sex, stock, image) => {
    var raw = JSON.stringify({
        "brand": brand,
        "category": category,
        "name": name,
        "price": price,
        "size": size,
        "color": color,
        "sex": sex,
        "stock": stock,
        "image": image
    });

    var requestOptions = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: raw,
        redirect: 'follow'
    };

    return fetch("https://backend-api-tpo-production.up.railway.app/products/create", requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al agregar el producto');
            }
            return response.text();
        })
        .then(result => console.log(result))
        .catch(error => console.log('Error al agregar el producto', error));
}

    

export const modifyProduct = (product, id, token) => {
    console.log(product.image)
    var raw = JSON.stringify({
        "id": id,
        "brand": product.brand,
        "category": product.category,
        "name": product.name,
        "price": product.price,
        "size": product.size,
        "color": product.color,
        "sex": product.sex,
        "stock": product.stock,
        "image": product.image
        
    });

    return fetch(`https://backend-api-tpo-production.up.railway.app/products/modify`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: raw,
        redirect: 'follow'
    });
}

export const getProductByBrand = async (query) => {
    try {
        const response = await fetch('http://localhost:3000/products');
        const data = await response.json();
        const filteredProducts = data.filter(product =>
        product.brand.toLowerCase().includes(query.toLowerCase())
        );
        return filteredProducts;
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        return [];
    }
}
export const getProductByCategory = async (query) => {
    try {
        const response = await fetch('http://localhost:3000/products');
        const data = await response.json();
        const filteredProducts = data.filter(product =>
        product.category.toLowerCase().includes(query.toLowerCase())
        );
        return filteredProducts;
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        return [];
    }
}

export const getProductBySex = async (query) => {
    try {
        const response = await fetch('http://localhost:3000/products');
        const data = await response.json();
        const filteredProducts = data.filter(product =>
            product.sex.toLowerCase().includes(query.toLowerCase())
        ).filter(product =>
            product.sex.toLowerCase() === "unisex"
        );
        return filteredProducts;
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        return [];
    }
}

export const uploadImg = async (imageFile) => {
    try {
        const formData = new FormData();
        formData.append('imageFile', imageFile, imageFile.name); // 'imageFile' debe coincidir con el nombre esperado por el backend

        const response = await fetch('https://backend-api-tpo-production.up.railway.app/imagen/upload', {
            method: 'POST',
            headers: {
                'accept': '*/*', // Especifica el tipo de contenido aceptado
            },
            body: formData, // Adjunta el FormData que contiene el archivo
        });

        if (!response.ok) {
            throw new Error('Error al subir la imagen'); // Manejo de errores si la respuesta no es exitosa
        }

        const data = await response.json(); // Si el backend devuelve JSON, convierte la respuesta a JSON
        return data.url; // Suponiendo que el backend devuelve un objeto con una propiedad 'url'

    } catch (error) {
        console.error('Error en la carga de la imagen:', error);
        throw error; // Puedes manejar el error según sea necesario en tu aplicación
    }
};

export const purchaseProducts = async (products, discountCode = null, token) => {
    const url = 'https://backend-api-tpo-production.up.railway.app/payments/product';
  
    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'accept': '*/*'
    };
  
    const requestBody = {
      products: products.map(product => ({
        productId: product.productId,
        quantity: product.quantity
      })),
      discountCode: discountCode
    };
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(requestBody)
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const responseData = await response.json();
      return responseData; // Puedes ajustar esto según la respuesta esperada
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
      throw error;
    }
  };
  
