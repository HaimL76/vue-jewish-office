module.exports = {
    login
};

async function login(username, password) {
    const endPoint = '../backend/post_login.php';

    const postParams = JSON.stringify({
        usr: username,
        pwd: password
    });

    //alert(postParams);

    const postHeaders = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "pragma": "no-cache",
        "cache-control": "no-cache"
    };

    const postOptions = {
        method: 'post',
        headers: postHeaders,
        body: postParams
    }

    // I prefer to use fetch
    // you can use use axios as an alternative 
    const response = await fetch(endPoint, postOptions);

    if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
    }

    return response;
}