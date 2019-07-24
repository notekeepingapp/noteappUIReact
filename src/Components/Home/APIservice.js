const axios = require('axios');


export const getNotes = user => new Promise((async (resolve, reject) => {
  try {
    const notes = await axios.get(`${process.env.REACT_APP_API_HOST}/${user}/notes`);
    resolve(notes);
  } catch (e) {
    reject(e);
  }
}));

export const saveNote = (username, note) => new Promise((async (resolve, reject) => {
  try {
    const savedNote = await axios.post(`${process.env.REACT_APP_API_HOST}/${username}/notes`, note);
    resolve(savedNote);
  } catch (e) {
    reject(e);
  }
}));

export const updateNote = (username, note) => new Promise((async (resolve, reject) => {
  try {
    const updatedNote = await axios.post(`${process.env.REACT_APP_API_HOST}/${username}/notes/${note.id}`, note);
    resolve(updatedNote);
  } catch (e) {
    reject(e);
  }
}));

export const deleteNote = (username, noteid) => new Promise((async (resolve, reject) => {
  try {
    const deletedNote = await axios.delete(`${process.env.REACT_APP_API_HOST}/${username}/notes/${noteid}`);
    resolve(deletedNote);
  } catch (e) {
    reject(e);
  }
}));
