const API_KEY = 'live_RrvbyXnUF9NzymQk9bziXj81T9169lW9DTBTt6KIRGHfFIcG8SqKDusNLP1oTqGR';

const API_URL_FAVOURITES = 'https://api.thecatapi.com/v1/favourites?limit=2&api_key=live_RrvbyXnUF9NzymQk9bziXj81T9169lW9DTBTt6KIRGHfFIcG8SqKDusNLP1';
// const API_URL_FAVOURITES = 'https://api.thecatapi.com/v1/favourites?limit=2&api_key=live_RrvbyXnUF9NzymQk9bziXj81T9169lW9DTBTt6KIRGHfFIcG8SqKDusNLP1oTqGR'

const API_URL_RANDOM = 'https://api.thecatapi.com/v1/images/search?limit=2&api_key=live_RrvbyXnUF9NzymQk9bziXj81T9169lW9DTBTt6KIRGHfFIcG8SqKDusNLP1oTqGR';

const spanError = document.getElementById('error');

const loadRandomMichis = async () => {
    const res = await fetch(API_URL_RANDOM);
    console.log('response random: ',res);
    if(res.status!==200){
        try {
            console.log('voy a internar');
            const data = await res.json();
            console.log('falle');
            console.log(data);
        } catch(err) {
            console.log('me vine al error');
            console.error(err);
            console.log('Error: ',err);
            spanError.innerText = "Hubo un error: " + res.status + ' - ' + err;
        }
    } else {
        const data = await res.json();
        console.log('Random: ',data);

        const img1 = document.getElementById('image1');
        const img2 = document.getElementById('image2');

        img1.src = data[0].url;
        img2.src = data[1].url;
        }
};

const loadFavoritesMichis = async () => {
            
    const res = await fetch(API_URL_FAVOURITES);
    console.log('response favourites: ',res);
    if(res.status!==200){
        try {
            console.log('voy a internar en favs');
            const data = await res.json();
            console.log('falle');
            console.log(data);
        } catch(err) {
            console.log('me vine al error en favs');
            console.error(err); // to console it as an error
            console.log('Error at favourites: ',err); // console it as string
            spanError.innerText = "Hubo un error: " + res.status + ' - ' + err;

        }
    } else {
        const data = await res.json();
        console.log('Favourites: ',data);
    }
};

loadRandomMichis(); // para que recargue al hacer F5
loadFavoritesMichis(); // llamo tambien a los favoritos