

export const getGif = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=5&api_key=eORxlnjzCqq1CVCTC0PZ47BLKNwX1E3x`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map((img)=>({
        
        id : img.id,
        title : img.title,
        url : img.images.downsized_medium.url

    }));

    return gifs;

};