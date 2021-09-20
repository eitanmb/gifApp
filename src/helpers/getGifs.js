
export const getGifs = async( category ) => {
        
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=20&api_key=gioUW6f3fRdjFkMrr8HCDDS4J5egsE3A`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( ({ id, title, images }) => {
        return {
            id,
            title,
            url: images?.downsized_medium.url
        }
    });

    return gifs;


}
