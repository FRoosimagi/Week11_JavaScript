const currentMainImages = document.querySelector(".gallery-image4 img");
const imagesToChoosFrom = document.querySelectorAll(".gallery img");

imagesToChoosFrom.forEach(img => img.addEventListener('click', imageClick));


function imageClick(e) {
    console.log(e.target);
    
    imagesToChoosFrom.forEach(img => img.style.opacity = 1);

    currentMainImages.src = e.target.src;
    e.target.style.opacity = 0.5;
}