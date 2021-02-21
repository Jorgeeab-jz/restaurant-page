
function renderHeader (){
    let navItems = ['Inicio','Menú','Contacto'];

    let header = document.createElement('header');
    let backCont = document.createElement('div');
    backCont.classList.add('background-container');
    let backG = document.createElement('img');
    let screen = document.createElement('div');
    let hero = document.createElement('h1');
    hero.classList.add('hero');
    hero.innerText = 'Endulza tu día';
    screen.classList.add('screen');
    backG.src = 'https://firebasestorage.googleapis.com/v0/b/dulces-vicky.appspot.com/o/bg.jpg?alt=media&token=a0140e95-f377-4a06-a071-f609496ef439'
    backG.classList.add('head-bg');
    backCont.append(backG);
    header.append(backCont,screen,hero);
    let navbar = document.createElement('nav');
    navbar.classList.add('navbar','navbar-expand-lg');
    let title = document.createElement('a');
    title.classList.add('navbar-brand');
    title.innerText = "Vicky's Sweets";
    let navCont = document.createElement('div');
    navCont.classList.add('container-fluid');
    let togglerBtn = document.createElement('button');
    togglerBtn.classList.add('navbar-toggler');
    togglerBtn.setAttribute('type','button');
    togglerBtn.dataset.bsToggle = 'collapse';
    togglerBtn.dataset.bsTarget = '#navbarNav';
    let icon = document.createElement('i');
    icon.classList.add('fas','fa-bars');
    togglerBtn.append(icon);
    let listCont = document.createElement('div');
    listCont.classList.add('collapse','navbar-collapse');
    listCont.setAttribute('id','navbarNav');

    let linksCont = document.createElement('ul');
    linksCont.classList.add('navbar-nav','nav-fill','w-100');

    navItems.forEach(item=>{
        let itemLi = document.createElement('li');
        let text = document.createElement('a');
        itemLi.classList.add('nav-item');
        text.classList.add('nav-link');
        text.setAttribute('id',item.toLowerCase());
        text.innerText = item;
        itemLi.append(text);
        linksCont.append(itemLi);
    })
    listCont.append(linksCont);
    navCont.append(title,togglerBtn,listCont);
    navbar.append(navCont);

    header.append(navbar);
    
    return header
}

export {renderHeader as default};