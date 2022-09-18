const url = 'https://api.thecatapi.com/v1/images/search';

const img = document.querySelector('img');
img.src = "https://upload.wikimedia.org/wikipedia/commons/a/a7/Blank_image.jpg";


// const onClickNewImage = () => {
//     fetch(url)
//     .then(response => response.json()) //convert to json
//     .then(data => {
//         const img = document.querySelector('img');
//         img.src = data[0].url;
//     })
//     return img;
// };


const onClickNewImage = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const img = document.querySelector('img');
    img.src = data[0].url;
    return img;
};

