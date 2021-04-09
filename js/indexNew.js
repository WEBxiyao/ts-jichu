"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 这个是第二次学习ts
var flag = true;
console.log(flag);
var testdd = 1;
// 数组的定义有3种
var arr1 = [1, 2, 3];
var arr2 = ['1', '2', '3'];
var arr3 = [1, '2', false];
// 枚举值的定义  首字母必须是大写
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 0] = "success";
    Flag[Flag["error"] = 1] = "error";
})(Flag || (Flag = {}));
var s = Flag.success;
var e = Flag.error;
console.log(s, e);
var Cart;
(function (Cart) {
    Cart[Cart["bwm"] = 0] = "bwm";
    Cart[Cart["audi"] = 1] = "audi";
    Cart[Cart["jeep"] = 3] = "jeep";
    Cart[Cart["toyta"] = 4] = "toyta";
})(Cart || (Cart = {}));
var b = Cart.bwm;
var a = Cart.audi;
var j = Cart.jeep;
var t = Cart.toyta;
console.log(b, a, j, t); //0,1,3,4如果没有值得话就取值他的索引，但是如果有值了后面的值就以前面的值
// undefined类型要想申明一个变量为，必须要写
var und;
// void在ts中表示没有任何类型 ，一般用在函数没有返回值
function test() {
    console.log("123");
}
// never代表重来不会出现的值（报错时）
// var c:never;
// c=(()=>{
//  throw new Error("这个是一个错")
// })()
// 函数传参
// function getDate(name:string,age:number):string{
//     return `${name}-${age}`
// }
// console.log(getDate('liyao',18))
// 可选参数必须写在最后面
function getDate(name, age) {
    return name + "-" + age;
}
console.log(getDate('liyao'));
// 剩余参数
function buildName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join("");
}
var aName = buildName("Lili", "John", "David", "Durban");
console.log(aName);
function getInfo(str) {
    if (typeof str === 'string') {
        console.log('名字', str);
    }
    else if (typeof str === 'number') {
        console.log('年龄', str);
    }
}
getInfo(123);
// class类的写法
var person = /** @class */ (function () {
    function person(name) {
        this.name = name;
    }
    person.prototype.getValue = function () {
        return "\u8FD9\u662F\u83B7\u53D6\u7684\u503C" + this.name;
    };
    person.prototype.setValue = function (name) {
        this.name = name;
    };
    return person;
}());
var P = new person("liyao");
console.log(P.getValue());
P.setValue("zhangmei");
console.log(P.getValue());
// 继承
var cart = /** @class */ (function () {
    function cart(name) {
        this.name = name;
    }
    cart.prototype.run = function () {
        return this.name + "--\u5728\u8D5B\u9053\u4E0A\u8DD1";
    };
    return cart;
}());
var bwm = /** @class */ (function (_super) {
    __extends(bwm, _super);
    function bwm(name) {
        return _super.call(this, name) || this;
    }
    return bwm;
}(cart));
var bw = new bwm('320');
console.log(bw.run());
