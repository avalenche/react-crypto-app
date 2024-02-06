import {cryptoAssets, cryptoData} from './data'

export function fakeFetchCrypto() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(cryptoData)
    }, 1);
  })
}

export function fetchAssets(){
  return new Promise(resolve =>{
    setTimeout(() =>{
      resolve(cryptoAssets)
    }, 1)
  })
}


export async function fetchCrypto() {
  const options = {
    method: 'GET',
    headers: 
      {accept: 'application/json',
      'X-API-KEY': 'rsVniIByI6fazc0aEq3cCZmNfyUajnPA8lDSW3/B/FM='}
    };
  try {
    const response = await  fetch('https://openapiv1.coinstats.app/coins', options)
    const cryptoData = await response.json()
    return cryptoData
  } catch (error) {
    console.error(`Download error: ${error.message}`)
  }
    
}



// export default function fetchCrypto() {
//   const options = {
//     method: 'GET',
//     headers: 
//       {accept: 'application/json',
//       'X-API-KEY': 'rsVniIByI6fazc0aEq3cCZmNfyUajnPA8lDSW3/B/FM='}
//     };
//   return  (
//   fetch('https://openapiv1.coinstats.app/coins', options)
//     .then(response => response.json())
//     .then(response => response)
//     .catch(err => console.error(err))
// )}