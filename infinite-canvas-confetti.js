// ==UserScript==
// @name         Infinite Canvas Confetti
// @version      0.0.1
// @author       @hi1210
// @description  Infinite canvas confetti for your enjoyment
// @match        *://canvas.*.edu/*
// ==UserScript==

(function() {
    // When the user clicks the mouse, create a confetti
    document.addEventListener('mousedown', function(e) {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: {
                x: e.pageX / window.innerWidth,
                y: e.pageY / window.innerHeight
            }
        });
    });
})();