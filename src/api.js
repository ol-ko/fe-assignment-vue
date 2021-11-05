import axios from 'axios';

const BASE_URL = 'https://ebkqjitsgh.execute-api.eu-central-1.amazonaws.com/prod';

export function getListings() {
  return axios(`${BASE_URL}/listings/`);
}
