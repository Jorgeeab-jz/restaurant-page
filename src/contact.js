
function renderContact () {
    let contactCont = document.createElement('div');
    contactCont.classList.add('contact-container');

    let titleCont = document.createElement('div');
    titleCont.classList.add('title-container');

    let title = document.createElement('h1');
    title.classList.add('title');
    title.innerText = 'Escríbenos para lo que necesites!';

    titleCont.append(title);

    let messageCont = document.createElement('div');
    messageCont.classList.add('message-container');

    let textArea = document.createElement('textarea');
    textArea.classList.add('message-text');
    textArea.setAttribute('id', 'messade-text');

    let btnCont = document.createElement('div');
    btnCont.classList.add('send-container');

    let sendbtn = document.createElement('button');
    sendbtn.setAttribute('id','send-btn');
    sendbtn.classList.add('action-btn');
    sendbtn.innerText = 'Enviar';
    btnCont.append(sendbtn);

    messageCont.append(textArea,btnCont);

    contactCont.append(titleCont, messageCont);
    return contactCont;
}

export {renderContact as default};