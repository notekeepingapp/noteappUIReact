const axios = require("axios");

export const isValidCredentials = async (username, password) => {
    console.log(username + " " + password);
    let callStatus = false;
    await axios.post("http://localhost:1234/login", {
        username: username,
        password: password
    }).then(res => {
        callStatus = !!res.data;
    }).catch(err => {
        callStatus = false;
        //handle catch
    });
    return callStatus;
};
