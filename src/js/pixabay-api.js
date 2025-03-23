export async function fetchImages(query) {
  const API_KEY = '49484019-11a5d61f6cd196bafa2004bf7';
  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`;
  
  try {
      const response = await fetch(URL);
      if (!response.ok) throw new Error('Failed to fetch images');
      return await response.json();
  } catch (error) {
      console.error(error);
      return { hits: [] };
  }
}