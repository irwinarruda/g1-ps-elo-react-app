export const USER_API_URL = "http://localhost:3005/api";

export function userLogout() {
    window.localStorage.removeItem("token");
    //setData(null);
};

export const USER_IS_LOGED = async (token) => {
    try {
        if(token && token !== "undefined") {
            const response = await fetch(USER_API_URL + "/user/isloged", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + token
                },
            });
            const json = response.json();
            return json;
        } else {
            throw new Error("NENHUM TOKEN ENCONTRADO");
        }
    }catch(err) {
        console.error(err);
    }
}

export const USER_CREATE = (body) => {
    return {
        url: USER_API_URL + '/user/register',
        options: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }
    }
} 

export const USER_LOGIN = (body) => {
    return {
        url: USER_API_URL + '/user/login',
        options: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }
    }
}

export const USER_UPDATEIMG = (formData, token) => {
    return {
        url: USER_API_URL + '/user/update',
        options: {
            method: 'PUT',
            headers: {
                Authorization: 'Bearer ' + token,
            },
            body: formData
        }
    }
}

export const USER_UPDATEDB = (body, token) => {
    return {
        url: USER_API_URL + '/moviedb/update',
        options: {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            },
            body: JSON.stringify(body)
        }
    }
}