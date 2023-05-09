// ==UserScript==
// @name         Unblocker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Unblocks blocked websites
// @author       You
// @match        https://*.aisd.net/cgi-bin/*
// @icon         https://ckf05.aisd.net/favicon.ico
// @grant        none

// ==/UserScript==
(function() {
    'use strict';
    setTimeout(() => {
    var url = document.getElementById("URL").innerText;
    url = url.replace("https://","");
    url = url.replace("http://","");
    window.location.href = "https://web-production-263b.up.railway.app/load.html#" +url;
    },1000);
})();
