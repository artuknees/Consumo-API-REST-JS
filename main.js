const API_KEY = 'live_RrvbyXnUF9NzymQk9bziXj81T9169lW9DTBTt6KIRGHfFIcG8SqKDusNLP1oTqGR';

const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=3&api_key=live_RrvbyXnUF9NzymQk9bziXj81T9169lW9DTBTt6KIRGHfFIcG8SqKDusNLP1oTqGR';

const onClickNewImage = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();

    const img1 = document.getElementById('image1');
    const img2 = document.getElementById('image2');
    const img3 = document.getElementById('image3');


    img1.src = data[0].url;
    img2.src = data[1].url;
    img3.src = data[2].url;


    console.log(data);
};

onClickNewImage(); // para que recargue al hacer F5