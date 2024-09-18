export const getGifs = async(category)=>{

    const url = `https://api.giphy.com/v1/gifs/search?api_key=ayVE1I3Py6LsULRxWb0P8np9o9p5uL0u&q=${category}&limit=10`

    const resp = await fetch(url);

    const {data} = await resp.json();
    
    const gifs = data.map(img=>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    console.log(gifs)
    return gifs;
}