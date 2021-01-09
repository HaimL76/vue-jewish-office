module.exports = {
    login: (username, password) => {
        var endPoint = '../backend/post_login.php';

        // I prefer to use fetch
        // you can use use axios as an alternative
        return fetch(endPoint, {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    usr: username,
                    pwd: password
                })
            })
            .then(res => {
                // a non-200 response code
                if (!res.ok) {
                    // create error instance with HTTP status text
                    const error = new Error(res.statusText);
                    //error.json = res.json();
                    throw error;
                }

                return res.json();
            })
            .then(json => {
                // set the response data
                //data.value = json.data;

                alert(JSON.stringify(json));
            })
            .catch(err => {
                //error.value = err;

                //alert(JSON.stringify(error.value));

                // In case a custom JSON error response was provided
                if (err.json) {
                    return err.json.then(json => {
                        // set the JSON response message
                        //error.value.message = json.message;
                        alert(JSON.stringify(json));
                    });
                }
            })
            .then(() => {});
    }
}