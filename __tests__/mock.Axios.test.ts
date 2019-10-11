import { mocked } from 'ts-jest/utils';
import Axios, { AxiosPromise } from 'axios';

jest.mock('axios');

const mockedAxios = mocked(Axios, true);

test('fetch data', () => {
  mockedAxios.mockImplementation(
    () => Promise.resolve({ data: 123 }) as AxiosPromise,
  );

  return Axios({}).then((response) => {
    expect(response.data).toBe(123);
  });
});
