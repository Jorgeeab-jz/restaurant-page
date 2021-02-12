
function renderHome (){
    let homeWrapper = document.createElement('div');
    homeWrapper.classList.add('home-wrapper');

    let titleWrapper = document.createElement('div');
    titleWrapper.classList.add('title-wrapper');
    let title = document.createElement('h1');
    title.classList.add('title');
    title.innerText = 'Deliciosos dulces caseros para endulzar tu día';

    titleWrapper.append(title);

    let mainWrapper = document.createElement('div');
    mainWrapper.classList.add('main-wrapper');

    let logoWrapper = document.createElement('div');
    logoWrapper.classList.add('logo-wrapper');
    let logo = document.createElement('img');
    logo.src = 'https://firebasestorage.googleapis.com/v0/b/dulces-vicky.appspot.com/o/Mainlogo.png?alt=media&token=90989089-924f-40ae-95de-0deec3eab000'
    logoWrapper.append(logo);
    let buttonWrapper = document.createElement('div');
    buttonWrapper.classList.add('button-wrapper');
    let button = document.createElement('button');
    button.setAttribute('id','main-btn');
    button.innerText = 'Haz tu pedido';
    buttonWrapper.append(button);
    
    mainWrapper.append(logoWrapper,buttonWrapper);
    homeWrapper.append(titleWrapper,mainWrapper);

    return homeWrapper;
}

export {renderHome as default};