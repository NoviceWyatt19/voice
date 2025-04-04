// js : 8046adfd370bf95f54d67e01ccb119e3
// rest : 08b3d148ae311820628f053372d71dd4
// https://dapi.kakao.com/v3/search/book
// KakaoAK 08b3d148ae311820628f053372d71dd4
const API_URL = 'https://dapi.kakao.com/v3/search/book?';
const API_KEY = 'KakaoAK 08b3d148ae311820628f053372d71dd4';

const api = async params => {
  const queryString = new URLSearchParams(params).toString();
  const response = await fetch(API_URL+queryString, {
    headers: {Authorization: API_KEY}
  });

  return response.json();
}

export default api;
