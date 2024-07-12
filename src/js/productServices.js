export const deleteProduct = (id) => {
    var requestOptions = {
        method: 'DELETE',
    };

    return fetch("http://localhost:3000/products/" + id, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('Error al obtener producto', error));
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

export const createProduct = (id, publisherId, brand, category, name, price, size, color, sex, stock, image) => {

    var raw = JSON.stringify({
        "id": id,
        "publisherId": publisherId, 
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
        headers: {"Content-Type": "application/json"},
        body: raw,
        redirect: 'follow'
    };

    return fetch("http://localhost:3000/products", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('Error al agregar el producto', error));
}

export const modifyProduct = (product, id) => {
    return fetch(`http://localhost:3000/products/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
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