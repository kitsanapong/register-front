import { fetch } from 'whatwg-fetch'

export const POSTOption = (data) => {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ...data,  
    })
  }
}

export default function request(url, option) {
  return fetch(url, option)
}