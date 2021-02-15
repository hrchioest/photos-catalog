const api_key = process.env.REACT_APP_API_KEY_UNPLASH;

//Enpoint para que nos devuelva todos las fotos:
export const api_photos = `https://api.unsplash.com/photos/?page=1&client_id=${api_key}`;

//Enpoint para que nos filtre por categoría:
export const api_search = `https://api.unsplash.com/search/photos?query=[search]&client_id=${api_key}`;
