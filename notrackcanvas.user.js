// ==UserScript==
// @name         No Track Canvas
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Blocks all the trackers on canvas that notify an instructor when a tab is switched. I am not responsible for any damages or incidents that occur due to this script.
// @author       You
// @match        https://*.instructure.com/*
// @match        http://*.instructure.com/*
// @icon         https://arlington.instructure.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.hasFocus = () => true;
    document.onblur = function() {};
    document.onfocus = function() {};
    document.onvisibilitychange = function() {};

    for (let eventType of "visibilitychange blur page_blurred DOMFocusIn DOMFocusOut focus focusin focusout page_focused".split(" ")) {
        document.addEventListener(eventType, function(event) {
            event.stopImmediatePropagation();
        }, true);
        window.addEventListener(eventType, function(event) {
            event.stopImmediatePropagation();
        }, true);
    }
    console.log("Loaded no track canvas!");
})();
