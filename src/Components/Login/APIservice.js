const axios = require('axios');

const isValidCredentials = async (username, password) => {
  const callStatus = await axios.post(`${process.env.REACT_APP_API_HOST}/login`, {
    username,
    password,
  }).catch(error => error);
  return callStatus;
};

export default isValidCredentials;
