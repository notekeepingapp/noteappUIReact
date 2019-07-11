const axios = require("axios");

export const isValidCredentials = async (username, password) => {
  let callStatus;
  callStatus = await axios.post(process.env.REACT_APP_API_HOST+"/login", {
      username: username,
      password: password
    });
  return callStatus;
};
