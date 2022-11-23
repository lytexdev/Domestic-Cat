function changeImg() {
    let directory = 'stuff/images/random_cats/';
    let new_cat_image = directory + getRandomNumber(36) + '.jpg';
    document.getElementById('cat_image').src = new_cat_image;
}

function getRandomNumber(amount) {
    const getNumber = (Math.floor(Math.random() * amount) + 1);
    return getNumber;
}