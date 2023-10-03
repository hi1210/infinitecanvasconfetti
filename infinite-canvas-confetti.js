// ==UserScript==
// @name         Infinite Canvas Confetti
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       @hi1210
// @description  Infinite canvas confetti for your enjoyment
// @include      *canvas.*.edu*
// @require      https://cdn.jsdelivr.net/npm/canvas-confetti@1.7.0/dist/confetti.browser.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // When the user clicks the mouse, create a confetti at the mouse position
    document.addEventListener('mousedown', function(e) {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: {
                x: e.screenX / window.innerWidth,
                y: e.screenY / window.outerHeight
            }
        });
    });
})();