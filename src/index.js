//import _ from 'lodash';
import Cover from './images/GhostKitchen01.png';
import './style.css';
import {makeHome} from './home.js';
import {makeMenu} from './menu.js';
import {makeLocate} from './location.js';

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const locateBtn = document.querySelector("#location");

const contentDiv = document.querySelector("#content");

function menuItem(name,desc,price) {
    name = name;
    description = desc;
    price = price;
}

homeBtn.addEventListener("click",makeHome);
menuBtn.addEventListener("click",makeMenu);
locateBtn.addEventListener("click",makeLocate);

makeHome();