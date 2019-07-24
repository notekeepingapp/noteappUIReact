import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import isValidCredentials from '../APIservice';

describe('Login API Service', () => {
  it('returns data when isValidCredentials is called', async () => {
    const mock = new MockAdapter(axios);
    mock.onPost(`${process.env.REACT_APP_API_HOST}/login`).replyOnce(200);
    await isValidCredentials('Anju', 'Admin123').then((response) => {
      expect(response.status).toEqual(200);
    });
  });
});
