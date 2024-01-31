chrome.cookies.getAll({domain: "youtube.com"}, function(cookies) {
    const cookieString = cookies.map(cookie => `${cookie.name}=${cookie.value}`).join('; ') + ";"
    const cookieList = document.getElementById('cookieList');
    cookieList.innerHTML = cookieString;
    const statusDiv = document.getElementById('status');
    document.getElementById('showCookies').addEventListener('click', function() {
        navigator.clipboard.writeText(cookieString).then(function() {
            statusDiv.innerHTML = 'Cookies copied to clipboard!'
        }, function(err) {
            statusDiv.innerHTML = `Could not copy cookies: ${err}`
        });
    });
});
