const axios = require("axios");

export const getNotes = async user => {
    return await axios.get(process.env.REACT_APP_API_HOST + "/" + user + "/notes");
};

export const deleteNote = async (username, noteid) => {
  return await axios.delete(process.env.REACT_APP_API_HOST+"/"+ username + "/notes/" + noteid);
};

export const saveNote = async (username, note) => {
  return await axios.post(process.env.REACT_APP_API_HOST+"/"+username+"/notes", note);
};

export const updateNote = async (username, note) => {
  return await axios.post(process.env.REACT_APP_API_HOST+"/"+username+"/notes/"+ note.id, note);
};
