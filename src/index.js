import header from './header'
import footer from './footer';
import home from './home';
import menu from './menu';


const content = document.getElementById('content');


content.append(header(),home(),footer())

function showMenu () {
    content.innerHTML = '';
    content.append(header(),menu(productList),footer());
}


document.getElementById('main-btn').addEventListener('click', showMenu);

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