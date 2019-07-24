import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {
  getNotes, deleteNote, updateNote, saveNote,
} from '../APIservice';

describe('Home API Service', () => {
  let mock;
  beforeEach(() => {
    mock = new MockAdapter(axios);
  });
  it('returns data when getNotes is called and response with status 200', async () => {
    mock.onGet(`${process.env.REACT_APP_API_HOST}/Anju/notes`).reply(200);
    await getNotes('Anju').then((response) => {
      expect(response.status).toEqual(200);
    });
  });

  it('returns data when saveNote is called and response with status 200', async () => {
    mock.onPost(`${process.env.REACT_APP_API_HOST}/Anju/notes`).reply(200);
    const note = {
      noteTitle: 'Anju',
      noteContent: 'admin1',
    };
    await saveNote('Anju', note).then((response) => {
      expect(response.status).toEqual(200);
    });
  });

  it('returns data when updateNote is called and response with status 200', async () => {
    mock.onPost(`${process.env.REACT_APP_API_HOST}/Anju/notes/2`).reply(200);
    const note = {
      id: 2,
      noteTitle: 'Anju',
      noteContent: 'admin1',
    };
    await updateNote('Anju', note).then((response) => {
      expect(response.status).toEqual(200);
    });
  });

  it('returns data when deleteNote is called and response with status 200', async () => {
    mock.onDelete(`${process.env.REACT_APP_API_HOST}/Anju/notes/2`).reply(200);
    await deleteNote('Anju', 2).then((response) => {
      expect(response.status).toEqual(200);
    });
  });
});
