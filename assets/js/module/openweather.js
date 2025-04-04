const API_KEY = 'd3d3de0defcfe32b777c03ed51c4d620';
const API_URL = ' https://api.openweathermap.org/data/2.5/weather?';

const api = async coords => {
  const params = {
    appid: API_KEY,
    lat: coords.latitude,
    lon: coords.longitude,
    units: 'metric'
  };
  const url = API_URL + new URLSearchParams(params).toString();
  const response = await fetch(url);
  return response.json();

}
export default api;

