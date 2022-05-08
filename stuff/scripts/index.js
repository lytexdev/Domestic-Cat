

function getRandomNumber(amount) {
    const getNumber = (Math.floor(Math.random() * amount) + 1);
    return getNumber;
}

function changeImg() {
    let directory = 'stuff/images/random_cats/';
    document.getElementById('cat_image').src = directory + getRandomNumber(36) + '.jpg';
}