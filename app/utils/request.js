import { fetch } from 'whatwg-fetch'

function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

export const POSTOption = (data) => {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({
      ...data,  
    })
  }
}

export const GETOption = () => {
  return {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
  }
}

export default function request(url, option) {
  return fetch(url, option)
    .then(parseJSON)
}

export function requestXML(url, option) {
  return fetch(url, option)
}