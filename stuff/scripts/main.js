function handleLogoClick() {
    if (document.getElementById('logo').getAttribute('src') == 'stuff/images/logo.png') {
        document.getElementById('logo').src = 'stuff/images/logo2.png';
        document.getElementById('logo').style.transform = 'rotate(10deg)';
    } else {
        document.getElementById('logo').src = 'stuff/images/logo.png';
        document.getElementById('logo').style.transform = 'rotate(0deg)';
    }
}

function currentSide() { alert('Du bist bereits auf dieser Unterseite.') }

function openNavigator() {
    let navigator = document.getElementById("navigator");
    if (navigator.className == "topnav") {
        navigator.className += " responsive";
    } else {
        navigator.className = "topnav";
    }
}

window.onscroll = function handleScroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("go-to-top").style.display = "block";
    } else {
        document.getElementById("go-to-top").style.display = "none";
    }
}

function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}    

function onAuthorClick() { alert('Website von Immanuel... 😀'); }