"use strict";
// 接口
// interface Girls {
//     name:string;
//     age:number;
//     [propName:string]:any
// }
// const girls={
//     name:'留影',
//     age:18,
//     sex:'女'
// }
// // 类的接口使用
// class Boy implements Girls{
//     name="谢大脚"
//     age=18
// }
// // 接口的继承
// interface AllGirls extends Girls {
//     say():string
// }
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
// const screenResume=(girls:Girls)=>{
//  console.log(girls)
// }
// screenResume(girls)
// // 构造函数类
// class Person{
//     constructor(public name:string){
//       this.name=name
//     }
// }
// class Teacher extends Person{
//     constructor(public age:number){
//       super("xiyao")
//       this.age=age
//     }
// }
// const people=new Person("xiyao123")
// console.log(people.name)
// //构造函数当中的get，和set的用法 
// class GetTest {
//     constructor(private name:string){
//         this.name=name
//     }
//     get getType(){
//         return this.name
//     }
//     set setType(name:string){
//       this.name=name
//     }
// }
// const testa=new GetTest("我是测试get")
// testa.setType="修改了----"
// console.log(testa.getType)
// //构造函数里面的静态方法
// class StaTest {
//     sayLove(){
//         return "构造函数里面的静态方法"
//     }
// }
// const testb=new StaTest()
// console.log(testb.sayLove())
// class StaTestb {
//    static sayLove(name:string){
//         return name
//     }
// }
// console.log(StaTestb.sayLove("静态方法"))
// //只读
// class Read{
//     public readonly name:string
//     constructor(name:string){
//         this.name=name
//     }
// }
// const testc=new Read("只读的---")
// console.log(testc.name)
// // 抽象方法
// abstract class NamePreson {
//     abstract eat():void
// }
// class NamePresonA extends NamePreson {
//     eat(){
//         console.log("吃水果------")
//     }
// }
// //类型保护
// interface protectTypeA {
//     name:boolean;
//     say:()=>{}
// }
// interface protectTypeB {
//     name:boolean;
//     skill:()=>{}
// }
// function protectType(name:protectTypeA | protectTypeB){
//     if(name.name){
//         (name as protectTypeB).skill()
//     }else{
//       (name as protectTypeA).say()
//     }
// }
// function protectTypeNew(name:protectTypeA | protectTypeB){
//     if('skill' in name){
//         name.skill()
//     }else{
//         name.say()
//     }
// }
// function add(a:string | number,b:string | number){
//     if(typeof a==='string' || typeof b==='string'){
//         return `${a}${b}`
//     }
//     return a+b
// }
// //使用instanceof只能使用class定义的时候
// // class Obj{
// //     count:number
// // }
// // function addObj(a:object|Obj,b:object | Obj){
// //   if(a instanceof Obj && b instanceof Obj){
// //     return a.count+b.count
// //   }
// //   return 0
// // }
// //枚举类型
// enum type{
//     home,
//     detail,
//     me
// }
// function goHome(name:any){
//     if(name===type.home){
//         console.log("去首页",name)
//     }else if(name===type.detail){
//         console.log("去详情")
//     }else{
//         console.log("去个人中心")
//     }
// }
// goHome(type.detail)
// //泛型的使用
// function generic<T>(a:T,b:T){
//     return `${a}-${b}`
// }
// generic<string>('123','456')
// function genericArr<T>(a:Array<T>):string{
//     return `${a[0]}`
// }
// genericArr<string>(['1','2','3'])
// type TestChange={
//   name:string
// }
// const cc:TestChange={name:"123"}
// //泛型在class类中使用
// interface selectType {
//     name:string
// }
// const data:Array<selectType>=[{name:'谢大脚'},{name:'刘颖'}]
// class SelectGirls<T extends selectType> {
//     constructor(private girls:Array<T>){}
//     getGirls(index:number):string{
//      return this.girls[index].name
//     }
// }
// const selectGirls=new SelectGirls<selectType>(data)
// console.log(selectGirls.getGirls(1));
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    Animal.sayHello = function () {
        console.log("动物忠诚");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, age, height) {
        var _this = _super.call(this, name, age) || this;
        _this.height = height;
        return _this;
    }
    return Dog;
}(Animal));
var Doga = new Dog('小狗', 20, 130);
console.log(Dog.sayHello());
// class Dog{
//    private name:string;
//    private age:number;
//    constructor(name:string,age:number){
//        this.name=name
//        this.age=age
//    }
// //    ts中可以用get  来设置获取值得get方法
//   get _name(){
//       return this.name
//   }
//   set _name(value:string){
//       this.name=value
//   }
// }
// const D=new Dog('小狗',18)
// D._name="小猫"
// console.log(D._name)
