export const signIn = (nick, name, email, password) => {
    var requestOptions = {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        //body: raw,
        redirect: 'follow'
    };

    const encodedNick = encodeURIComponent(nick);
    const encodedName = encodeURIComponent(name);
    const encodedEmail = encodeURIComponent(email);
    const encodedPassword = encodeURIComponent(password);

    return fetch(`https://backend-api-tpo-production.up.railway.app/user/sign-in?nick=${encodedNick}&name=${encodedName}&email=${encodedEmail}&password=${encodedPassword}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('Error try sign in', error));
}


export const login = (nick , password) => {
    /*
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
    */
    var requestOptions = {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        //body: raw,
        redirect: 'follow'
    };

    return fetch("https://backend-api-tpo-production.up.railway.app/user/sign-in?username="+nick+"&password="+password, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('Error try login', error));
}


export const getUserInfo = (token) => {
    /*
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
    */
    var requestOptions = {
        method: 'GET',
        headers: {"Content-Type": "application/json"},
        //body: raw,
        redirect: 'follow',
        auth: token

    };

    return fetch("https://backend-api-tpo-production.up.railway.app/user", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('Error try getUserInfo', error));
}