const axios = require('axios');

export const getNotes = async (user) => {
  const notes = await axios.get(`${process.env.REACT_APP_API_HOST}/${user}/notes`);
  return notes;
};

export const deleteNote = async (username, noteid) => {
  const deletedNote = await axios.delete(`${process.env.REACT_APP_API_HOST}/${username}/notes/${noteid}`);
  return deletedNote;
};

export const saveNote = async (username, note) => {
  const savedNote = await axios.post(`${process.env.REACT_APP_API_HOST}/${username}/notes`, note);
  return savedNote;
};

export const updateNote = async (username, note) => {
  const updatedNote = await axios.post(`${process.env.REACT_APP_API_HOST}/${username}/notes/${note.id}`, note);
  return updatedNote;
};
