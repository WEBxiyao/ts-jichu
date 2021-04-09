"use strict";
var Home;
(function (Home) {
    var Header = /** @class */ (function () {
        function Header() {
            var elet = document.createElement("div");
            elet.innerText = "我是头部文件";
            elet.style.backgroundColor = "red";
            document.body.appendChild(elet);
        }
        return Header;
    }());
    var Content = /** @class */ (function () {
        function Content() {
            var elet = document.createElement("div");
            elet.innerText = "我是中间的内容";
            elet.style.backgroundColor = "yellow";
            document.body.appendChild(elet);
        }
        return Content;
    }());
    var Footer = /** @class */ (function () {
        function Footer() {
            var elet = document.createElement("div");
            elet.innerText = "我是底部的导航";
            elet.style.backgroundColor = "blue";
            document.body.appendChild(elet);
        }
        return Footer;
    }());
    var Page = /** @class */ (function () {
        function Page() {
            new Header();
            new Content();
            new Footer();
        }
        return Page;
    }());
    Home.Page = Page;
})(Home || (Home = {}));
