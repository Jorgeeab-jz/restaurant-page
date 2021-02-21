
function renderFooter (){
    const socialNet = [
        {
            'name': 'instagram',
            'icon': ['fab','fa-instagram'],
            'link': 'https://www.google.com'
        },
        {
            'name': 'whatsapp',
            'icon': ['fab','fa-whatsapp'],
            'link': 'https://www.google.com'
        }
    ];

    let footer = document.createElement('footer');
    footer.classList.add('footer-container');

    let title = document.createElement('span');
    title.innerText = 'Síguenos:';

    let socialContainer = document.createElement('div');
    socialContainer.classList.add('social');

    socialNet.forEach(item=>{
        let itemCont = document.createElement('div');
        itemCont.classList.add('social-item',item.name);
        let link = document.createElement('a');
        let icon = document.createElement('i');

        link.href = item.link;

        item.icon.forEach(iconClass=>{
            icon.classList.add(iconClass)
        })

        link.append(icon);
        itemCont.append(link);
        socialContainer.append(itemCont);
    })

    footer.append(title,socialContainer);

    return footer;
}

export {renderFooter as default}