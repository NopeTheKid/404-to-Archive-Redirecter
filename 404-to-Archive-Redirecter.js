// ==UserScript==
// @name         404 to Archive Redirecter
// @version      2024-02-20
// @description  When the page is 404, redirect to wayback machine
// @match        *://*/*
// @author       Nopearino
// ==/UserScript==

(function() {
    'use strict';
    var req = new XMLHttpRequest();
    req.open('GET', document.location, true);
    req.send(null);
    req.onload = function() {
        var status = req.status
        if(status == 404){
            window.location.replace("https://web.archive.org/web/*/"+window.location.host + window.location.pathname);
        }
    };
})();
