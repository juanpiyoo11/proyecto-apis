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
    return fetch("http://localhost:3000/products")
        .then((response) => response.json())
        .catch(error => console.log('Error al obtener productos', error))
        .finally(() => console.log('promise is finished'));
}

export const getProductById = (id) => {
    return fetch(`http://localhost:3000/products/${id}`)
        .then((response) => response.json())
        .catch(error => console.log('Error al obtener producto', error))
        .finally(() => console.log('promise is finished'));
}

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