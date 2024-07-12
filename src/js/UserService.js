export const signIn = async (nick, name, email, password) => {
    var requestOptions = {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        redirect: 'follow'
    };

    const encodedNick = encodeURIComponent(nick);
    const encodedName = encodeURIComponent(name);
    const encodedEmail = encodeURIComponent(email);
    const encodedPassword = encodeURIComponent(password);

    try {
        const response = await fetch(`https://backend-api-tpo-production.up.railway.app/user/sign-in?nick=${encodedNick}&name=${encodedName}&email=${encodedEmail}&password=${encodedPassword}`, requestOptions);
        
        if (!response.ok) {
            // Lanza un error si el estado HTTP no es exitoso
            throw new Error(`Error: ${response.status}`);
        }

        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            const result = await response.json();
            return result;
        } else {
            const result = await response.text();
            throw new Error(result);
        }
    } catch (error) {
        // Ignora errores específicos de "Unexpected error from Railway Proxy"
        if (error.message.includes('Unexpected error from Railway Proxy')) {
            console.warn('Ignorando error de proxy de Railway:', error);
            return;
        } else {
            console.error('Error al intentar iniciar sesión:', error);
            throw error; // Lanza otros errores para que el componente lo maneje
        }
    }
};




import { setToken, setUser } from '../store/authSlice';

export const login = (nick, password) => {
  var requestOptions = {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
  };

  return fetch(`https://backend-api-tpo-production.up.railway.app/user/login?username=${nick}&password=${password}`, requestOptions)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      if (data.token) {
        return data;
      } else {
        throw new Error('Invalid login response');
      }
    });
};



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