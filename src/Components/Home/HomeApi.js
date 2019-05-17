const axios = require("axios");

export const getNotes = async (user) => {
    console.log(user);
    await axios.get("http://localhost:1234/list-notes/" + user)
        .then(res => {
            console.log(res.data);
            return res.data;
        })
        .catch(err => {
            return false;
        });
};

export const deleteNote = async (username, noteid) => {
    await axios.delete("http://localhost:1234/list-notes/" + username + "/" + noteid)
        .then(res => {
            return true;
        })
        .catch(err => {
            return false;
        });
};

export const saveNote = async (username, note) => {
    await axios.post("http://localhost:1234/list-notes/" + username,note)
        .then(res => {
            return true;
        })
        .catch(err => {
            return false;
        });
};

export const updateNote = async (username, note) => {
    await axios.post("http://localhost:1234/list-notes/" + username + "/" + note.id, note)
        .then(res => {
            return true;
        })
        .catch(err => {
            return false;
        });
};