module.exports = {
    login
};

async function login(username, password) {
    var endpoint = '../backend/post_login.php';

    const options = {
        method: 'get', 
        headers: new Headers({
            'Authorization': 'Basic ' + btoa(`${username}:${password}`), 
            'Content-Type': 'application/x-www-form-urlencoded'
        })
    };
    
    const response = await fetch(endpoint, options);

    if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
    }

    return response;
}