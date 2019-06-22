const axios = require("axios");

export const getNotes = async user => {
  await axios
    .get(process.env.REACT_APP_API_HOST+"/"+user+"/notes")
    .then(res => {
      return res.data;
    })
    .catch(() => {
      return false;
    });
};

export const deleteNote = async (username, noteid) => {
  await axios
    .delete(process.env.REACT_APP_API_HOST+"/"+ username + "/notes/" + noteid)
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
};

export const saveNote = async (username, note) => {
  await axios
    .post(process.env.REACT_APP_API_HOST+"/"+username+"/notes", note)
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
};

export const updateNote = async (username, note) => {
  await axios
    .post(process.env.REACT_APP_API_HOST+"/"+username+"/notes/"+ note.id, note)
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
};
