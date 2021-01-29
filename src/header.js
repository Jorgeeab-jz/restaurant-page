
function renderHeader (){
    let navItems = ['Inicio','Menú','Contacto'];

    let header = document.createElement('header');
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
        itemLi.setAttribute('id',item)
        text.classList.add('nav-link');
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