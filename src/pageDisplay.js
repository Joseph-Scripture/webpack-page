import download from "./images/new.jpeg"


const homeBtn = document.querySelector('.home');
const aboutBtn = document.querySelector('.about');
const menuBtn = document.querySelector('.menu');
const emptyDiv = document.querySelector('#container')



   
// const image = document.createElement("img");
// image.src = odinImage;
   
// document.body.appendChild(image);

export function displayHome(){
    emptyDiv.innerHTML = '';
    const container = document.createElement('div')
    const header = document.createElement('h1')
    header.classList.add('home-header');
    const paragraph = document.createElement('p')
    paragraph.textContent = 'Where beauty meets pleasure'
    paragraph.classList.add('p')
    const header2 = document.createElement('h2');
    header2.textContent = 'Authentic Flavors, Unforgettable Moments.';
    const image = document.createElement('img');
    image.src = download;


    container.appendChild(header)
    container.appendChild(paragraph)
    container.appendChild(header2)
    container.appendChild(image)
    emptyDiv.appendChild(container);

    // emptyDiv.appendChild(image)


}