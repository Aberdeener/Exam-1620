window.onload = () => {

    document.querySelectorAll('.shop-item-image').forEach(element => {
        photo_name = (element.id).replace(' ', '');
        element.src = `./img/${photo_name}.png`;
    });

}