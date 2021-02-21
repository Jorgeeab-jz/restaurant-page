
function renderMenu (products) {
    let menuCont = document.createElement('div');
    menuCont.classList.add('menu-container');

    for (const [key,value] of Object.entries(products)){
        let itemCont = document.createElement('div');
        itemCont.classList.add('item-container');
        let title = document.createElement('h1');
        title.classList.add('item-title');
        title.innerText = key;
        
        itemCont.append(title);
        
        for( const [key2,value2] of Object.entries(value)){
            let descriptionCont = document.createElement('div');
            descriptionCont.classList.add('description');
    
            let itemName = document.createElement('span');
            itemName.classList.add('item-name');
            itemName.innerText = value2.name;
            let itemPrice = document.createElement('span');
            itemPrice.classList.add('item-price');
            itemPrice.innerText = value2.price + '$';
            descriptionCont.append(itemName,itemPrice);
            itemCont.append(descriptionCont);
        }

        
        menuCont.append(itemCont);
    }
    
    return menuCont;
}

export {renderMenu as default};