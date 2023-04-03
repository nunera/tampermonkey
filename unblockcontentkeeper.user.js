// ==UserScript==
// @name         Unblocker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Unblocks blocked websites
// @author       You
// @match        https://ckf05.aisd.net/*
// @icon         https://ckf05.aisd.net/favicon.ico
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    window.addEventListener('load', function () {
        setTimeout(
            function load() {
                var url = document.getElementById("URL").innerText;
                url = url.replace("https://","");
                url = url.replace("http://","");
                window.location.href = "https://incognito-production-080a.up.railway.app/load.html#" + btoa(url)
            },1000)
    })
})();
