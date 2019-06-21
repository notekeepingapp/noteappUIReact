const axios = require("axios");

export const isValidCredentials = async (username, password) => {
  let callStatus = false;
  await axios.post(process.env.REACT_APP_API_HOST+"/login", {
      username: username,
      password: password
    })
    .then(res => {
      callStatus = !!res.data;
    })
    .catch(err => {
      callStatus = false;
      //handle catch
    });
  return callStatus;
};
