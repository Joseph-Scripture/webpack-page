import download from "./images/new.jpeg"
import backgroundImage from './images/about.jpeg';
// import { container } from "webpack";


const homeBtn = document.querySelector('.home');
const aboutBtn = document.querySelector('.about');
const menuBtn = document.querySelector('.menu');
const emptyDiv = document.querySelector('#container')


export function displayHome(){
    const body = document.body;
    body.style = ''
    body.style.backgroundColor = '#F8B259';
    body.style.textAlign = 'center';
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

export function displayAbout(){
    emptyDiv.innerHTML = '';
    const body = document.body
    body.style.backgroundColor = 'transparent';
    body.style.backgroundImage = `url(${backgroundImage})`
    body.style.backgroundSize = 'cover';      
    body.style.backgroundPosition = 'center'; 
    body.style.backgroundRepeat = 'no-repeat';
    body.style.backgroundAttachment = 'fixed';

    // Creating Contact
    const contact = document.createElement('p');
    contact.textContent = 'Send Us a Message';
    contact.classList.add('contact-p')
    const newDiv = document.createElement('div')
    const email = document.createElement('p');
    email.classList.add('email');
    email.textContent = 'example@gmail.com';
   

   
    
    newDiv.classList.add('contact-div')
    
    newDiv.appendChild(contact)
    newDiv.appendChild(email)
    

    emptyDiv.appendChild(newDiv)

    
}