const axios = require('axios');

const isValidCredentials = (username, password) => new Promise((async (resolve, reject) => {
  try {
    const callStatus = await axios.post(`${process.env.REACT_APP_API_HOST}/login`, {
      username,
      password,
    });
    resolve(callStatus);
  } catch (e) {
    reject(e);
  }
}));

export default isValidCredentials;
