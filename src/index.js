import header from './header'
import footer from './footer';
import home from './home';
import menu from './menu';
import contact from './contact';

const content = document.getElementById('content');

content.append(header(),home(),footer());
document.getElementById('main-btn').addEventListener('click', showMenu);
addListeners();

function showMenu () {
    content.innerHTML = '';
    content.append(header(),menu(productList),footer());
    addListeners();
}

function showContact () {
    content.innerHTML = '';
    content.append(header(),contact(),footer());
    addListeners();
}

function showHome () {
    content.innerHTML = '';
    content.append(header(),home(),footer());
    addListeners();
    document.getElementById('main-btn').addEventListener('click', showMenu);
}

function addListeners () {
    document.getElementById('inicio').addEventListener('click', showHome);
    document.getElementById('menú').addEventListener('click', showMenu);
    document.getElementById('contacto').addEventListener('click', showContact);
}


const firebaseConfig = {
    apiKey: "AIzaSyBhEEjKEDyuJQ0fXY0R3VyMvssNEffLaMI",
    authDomain: "dulces-vicky.firebaseapp.com",
    databaseURL: "https://dulces-vicky-default-rtdb.firebaseio.com",
    projectId: "dulces-vicky",
    storageBucket: "dulces-vicky.appspot.com",
    messagingSenderId: "877270025588",
    appId: "1:877270025588:web:f8ad1aab9cfb9106935821",
    measurementId: "G-TE0KQKQ16F"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const dulcesDB = firebase.database();
const productsDB = dulcesDB.ref().child('productos');
let productList;

productsDB.once('value')
.then(snap=>{
    productList = snap.val();
});

export {productsDB as dulcesData};