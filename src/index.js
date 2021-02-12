import header from './header'
import footer from './footer';
import home from './home';

const content = document.getElementById('content');


content.append(header(),home(),footer())


