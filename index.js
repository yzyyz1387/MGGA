    // ==UserScript==
    // @name         GitHub personal style
    // @namespace    http://tampermonkey.net/
    // @version      0.2
    // @description  自定义 GitHub css样式
    // @author       幼稚园园长 github@yzyyz1387
    // @match        https://github.com/*
    // @resource     data https://cdn.statically.io/gh/yzyyz1387/MGGA/master/style_p.css?dev=1
    // @grant        GM_addStyle
    // @grant        GM_getResourceText
    // @grant unsafeWindow
    // @run-at document-start
    // ==/UserScript==

    (function () {
        'use strict';
        let css = GM_getResourceText("data");
        if (typeof GM_addStyle !== "undefined") {
            GM_addStyle(css);
        } else {
            let styleNode = document.createElement("style");
            styleNode.appendChild(document.createTextNode(css));
            (document.querySelector("head") || document.documentElement).appendChild(styleNode);
        }
    })();


