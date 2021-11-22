const mybutton = document.querySelector('button');
const image = document.querySelector('img');
const images = [ "Accord.jpeg", "Civic.jpeg", "NSX.jpeg", "s2000.jpeg"];

mybutton.addEventListener('click', changeImage);

function changeImage() {
    let randomIndex = Math.floor(Math.random() * images.length);
    console.log(randomIndex);
    image.src = "img/" + images[randomIndex];
}