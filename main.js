// Para el curso
// https://developers.thecatapi.com/

const API_KEY = 'live_RrvbyXnUF9NzymQk9bziXj81T9169lW9DTBTt6KIRGHfFIcG8SqKDusNLP1oTqGR';

// const API_URL_FAVOURITES = 'https://api.thecatapi.com/v1/favourites?limit=2';
const API_URL_FAVOURITES = 'https://api.thecatapi.com/v1/favourites'

const API_URL_RANDOM = 'https://api.thecatapi.com/v1/images/search?limit=2';

const API_URL_FAVOURITES_DELETE = (id) => `https://api.thecatapi.com/v1/favourites/${id}`;

const spanError = document.getElementById('error');

// const load = async () => {
//     const API_URL_FAVOURITES = 'https://api.thecatapi.com/v1/favourites?limit=2';
//     const res = await fetch(API_URL_FAVOURITES);
//     console.log('Response: ',res);
//     const data = await res.json();
//     console.log(data);
// };

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
        const btn1 = document.getElementById('btn1');
        const btn2 = document.getElementById('btn2');

        img1.src = data[0].url;
        img2.src = data[1].url;

        btn1.onclick = () => saveFavourite(data[0].id);
        btn2.onclick = () => saveFavourite(data[1].id);
        }
};

const loadFavoritesMichis = async () => {
            
    const res = await fetch(API_URL_FAVOURITES
        ,{
        method: 'GET',
        headers: {
            'X-API-KEY': API_KEY,
        },
    }
    );
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
        const section = document.getElementById('favoritesMichis');
        section.innerHTML = "";
        const h2 = document.createElement('h2');
        const h2Text = document.createTextNode('Gatitos favoritos');
        h2.appendChild(h2Text);
        section.appendChild(h2);


        data.forEach(item => {
            const article = document.createElement('article');
            const img = document.createElement('img');
            const btn = document.createElement('button');
            const btnText = document.createTextNode('Sacar al michi de favoritos');
            btn.appendChild(btnText);
            btn.onclick = () => deleteFavourite(item.id);
            img.src = item.image.url;
            img.width = 150;
            article.appendChild(img);
            article.appendChild(btn);
            section.appendChild(article);
        })
    }
};

const saveFavourite = async (id) => {
    const res = await fetch(API_URL_FAVOURITES , {
        method:'POST', // por defecto es un GET
        headers: { // el tipo de respuesta que estoy esperando
            'Content-Type':'application/json',
            // 'Content-Type':'text/plain', // con esto falla porque no lo soporta
            'X-API-KEY': API_KEY,
            
        },
        body: 
        JSON.stringify({
            image_id: id,
        }), 
    });
    const data = await res.json();
    console.log('save: ',res);

    if(res.status!==200){
        try {
            console.log('voy a internar en save favs');
            const data = await res.json();
            console.log('falle');
            console.log(data);
        } catch(err) {
            console.log('me vine al error en favs save');
            console.error(err); // to console it as an error
            console.log('Error at favourites: ',err); // console it as string
            spanError.innerText = "Hubo un error: " + res.status + ' - ' + err;
        }
    } else {
        console.log('Gato guardado en favoritos');
        loadFavoritesMichis();
    };
};

const deleteFavourite = async (id) => {
    const res = await fetch(API_URL_FAVOURITES_DELETE(id) , {
        method:'DELETE', // por defecto es un GET
        headers: { // el tipo de respuesta que estoy esperando
            'X-API-KEY': API_KEY,
        },

    });
    const data = await res.json();
    console.log('delete: ',res);

    if(res.status!==200){
        try {
            console.log('voy a internar en delete favos');
            const data = await res.json();
            console.log('falle');
            console.log(data);
        } catch(err) {
            console.log('me vine al error en favs delete');
            console.error(err); // to console it as an error
            console.log('Error at favourites: ',err); // console it as string
            spanError.innerText = "Hubo un error: " + res.status + ' - ' + err;
        }
    } else {
        console.log('Gato eliminado de favoritos');
        loadFavoritesMichis();
    };
};

loadRandomMichis(); // para que recargue al hacer F5
loadFavoritesMichis(); // llamo tambien a los favoritos