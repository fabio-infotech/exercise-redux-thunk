export const REQUEST_API = 'REQUEST_API';
export const GET_PICTURE = 'GET_PICTURE';

export const requestAPI = () => ({ type: REQUEST_API });

export const getPicture = (data) => ({ type: GET_PICTURE, data });

export function fetchAPI() {
  // Desenvolva aqui o código da action assíncrona
  return async (dispach) => {
    try {
      dispach(requestAPI());
      const response = await fetch('https://aws.random.cat/meow');
      const data = await response.json();
      dispach(getPicture(data));
    }
    catch (error) {
      console.log(error);
    }
  }
};
