function addToLocalStorage() {

    const productCart = {
        id: 1,
        name: "Paracetamol",
        price: 5.99,
        quantity: 50
    };

    localStorage.setItem("product", JSON.stringify(productCart));
}

function getFromLocalStorage(key) {
    var item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
}

function removeFromLocalStorage(key) {
    localStorage.removeItem(key);
}

export { addToLocalStorage, getFromLocalStorage, removeFromLocalStorage };
