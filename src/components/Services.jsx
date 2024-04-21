function addPharmaceuticalProductToLocalStorage(id, name, price, quantity) {
    const pharmaceuticalProduct = {
        id: id,
        name: name,
        price: price,
        quantity: quantity
    };

    localStorage.setItem('pharmaceuticalProduct', JSON.stringify(pharmaceuticalProduct));
}

export { addPharmaceuticalProductToLocalStorage };
