import "./styles.css";

import {displayHome, displayAbout} from './pageDisplay';

displayHome();


document.querySelector('.home').addEventListener('click', () => {
    displayHome();
});
document.querySelector('.about').addEventListener('click', () =>{
    displayAbout();
})