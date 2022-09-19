const API_KEY = 'live_RrvbyXnUF9NzymQk9bziXj81T9169lW9DTBTt6KIRGHfFIcG8SqKDusNLP1oTqGR';

const API_URL_FAVOURITES = 'https://api.thecatapi.com/v1/favourites?limit=2';
// const API_URL_FAVOURITES = 'https://api.thecatapi.com/v1/favourites?limit=2&api_key=live_RrvbyXnUF9NzymQk9bziXj81T9169lW9DTBTt6KIRGHfFIcG8SqKDusNLP1oTqGR'

const API_URL_RANDOM = 'https://api.thecatapi.com/v1/images/search?limit=2&api_key=live_RrvbyXnUF9NzymQk9bziXj81T9169lW9DTBTt6KIRGHfFIcG8SqKDusNLP1oTqGR';

const spanError = document.getElementById('error');

const loadRandomMichis = async () => {
    const response = await fetch(API_URL_RANDOM);
    const data = await response.json();
    // console.log('Random');
    // console.log(data);

    // if (response.status !== 200) {
    //     spanError.innerHTML = "Hubo un error: " + response.status;
    // } else {    
        const img1 = document.getElementById('image1');
        const img2 = document.getElementById('image2');

        img1.src = data[0].url;
        img2.src = data[1].url;
    // }
};

const loadFavoritesMichis = async () => {
    const response = await fetch(API_URL_FAVOURITES);

    if (response.status !== 200) {
        console.log('Error en favoritos');
        console.log(response);
        spanError.innerText = "Hubo un error: " + response.status;
    } else {
        const data = await response.json();
        console.log('Favourites');
        console.log(data);
    };
};

loadRandomMichis(); // para que recargue al hacer F5
loadFavoritesMichis(); // llamo tambien a los favoritos