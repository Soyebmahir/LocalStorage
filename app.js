const loadLocalStorageCart = () => {
    let cart = getCart();
    for (const name in cart) {
        displayItems(name);
    }
}


const addItem = () => {
    const inputField = document.getElementById('item-name');
    const name = inputField.value;

    if (!name) {
        return;
    }
    displayItems(name);
    setItemTocart(name);

    inputField.value = '';

}

const displayItems = (name) => {
    const ul = document.getElementById('productShow');
    const li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li);

}

const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart)
    } else {
        cartObj = {};
    }
    return cartObj;
}

const setItemTocart = (name) => {
    const cart = getCart();
    if (cart[name]) {
        cart[name] = cart[name] + 1;
    } else {
        cart[name] = 1;
    }

    const cartStringify = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringify);
}
const placeOrder = () => {
    document.getElementById('productShow').textContent = '';
    localStorage.removeItem('cart');
}
loadLocalStorageCart();