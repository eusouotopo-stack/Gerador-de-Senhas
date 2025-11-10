// main.js
function acceptCookies() {
    document.getElementById('cookieBox').style.display = 'none';
    localStorage.setItem('cookiesAccepted', 'true');
}

window.onload = function() {
    if(localStorage.getItem('cookiesAccepted') === 'true') {
        document.getElementById('cookieBox').style.display = 'none';
    } else {
        document.getElementById('cookieBox').style.display = 'flex';
    }
};
