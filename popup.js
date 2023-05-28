document.addEventListener("DOMContentLoaded", function() {
    const goToGoogleBtn = document.getElementById("goToGoogleBtn");
    goToGoogleBtn.addEventListener("click", redirectToGoogle);
});

function redirectToGoogle() {
    const redirectUrl = "https://www.google.com/";
    chrome.tabs.create({ url: redirectUrl });
}

// 

document.addEventListener("DOMContentLoaded", function() {
    const goToRobloxBtn = document.getElementById("goToRobloxBtn");
    goToRobloxBtn.addEventListener("click", redirectToRoblox);
});

function redirectToRoblox() {
    const redirectUrl = "https://www.roblox.com/";
    chrome.tabs.create({ url: redirectUrl });
}

//

document.addEventListener("DOMContentLoaded", function() {
    const goToYouTubeBtn = document.getElementById("goToYouTubeBtn");
    goToYouTubeBtn.addEventListener("click", redirectToYouTube);
});

function redirectToYouTube() {
    const redirectUrl = "https://www.youtube.com/";
    chrome.tabs.create({ url: redirectUrl });
}

//

document.addEventListener("DOMContentLoaded", function() {
    const goToTwitterBtn = document.getElementById("goToTwitterBtn");
    goToTwitterBtn.addEventListener("click", redirectToTwitter);
});

function redirectToTwitter() {
    const redirectUrl = "https://www.twitter.com/";
    chrome.tabs.create({ url: redirectUrl });
}

//

document.addEventListener("DOMContentLoaded", function() {
    const goToGitHubBtn = document.getElementById("goToGitHubBtn");
    goToGitHubBtn.addEventListener("click", redirectToGitHub);
});

function redirectToGitHub() {
    const redirectUrl = "https://www.github.com/";
    chrome.tabs.create({ url: redirectUrl });
}

//

document.addEventListener("DOMContentLoaded", function() {
    const goToInstagramBtn = document.getElementById("goToInstagramBtn");
    goToInstagramBtn.addEventListener("click", redirectToInstagram);
});

function redirectToInstagram() {
    const redirectUrl = "https://www.instagram.com/";
    chrome.tabs.create({ url: redirectUrl });
}