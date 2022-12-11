// 2022/12/11
// personal_gh_style.js
// Author: 幼稚园园长
// SoftWare: WebStorm
// @name         GitHub personal style
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  自定义 GitHub css样式
// @author       You
// @match        https://github.com/*
// @grant        none
// ==/UserScript==
(function () {
    'use strict';

    function loadStyles(url) {
        const link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = url;
        document.getElementsByTagName("head")[0].appendChild(link);
    }

    loadStyles("https://cdn.staticaly.com/gh/yzyyz1387/MGGA/master/style_p.css")
})();

