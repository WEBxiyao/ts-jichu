"use strict";
// let test:string="hello word"
// let a:boolean=false
// let b:string="真的不错"
// let arr:number[]=[123,2,3]
// let newArr:Array<number>=[1,2,3]
// enum flag {success=1,error=-1}
// let testFlag:flag=flag.success
// function testCz(str:string):string;
// function testCz(str:number):number;
// function testCz(str:any):any{
//     if(typeof str==='string'){
//         return str
//     }else{
//         return str
//     }
// }
// alert(testCz(123))
// class Person{
//     name:string
//     constructor(name:string){
//      this.name=name
//     }
//     run():string{
//      return this.name
//     }
// }
// const B=new Person("张山")
// class Web extends Person{
//     constructor(anme:string){
//       super(name)
//     }
//     static test():void{
//         console.log("这是一个静态函数")
//     }
// }
// const C=new Web("李四")
// 抽象的写法
// abstract class Person {
//     constructor(parameters:string) {
//     }
//     abstract eat():void;
// }
// class childrenPerson extends Person {
//     constructor(parameters:string) {
//         super(parameters)
//     }
//     eat():void{
//     }
// }
// 属性接口
// interface FullName{
// firstName:string;//这个地方用封号结尾
// secondName:string;
// }
// function Person(name:FullName):any{
//   console.log(`${name.firstName}-----${name.secondName}`)
// }
// const obj={
//     age:30,
//     firstName:"涨",
//     secondName:"三"
// }
// Person(obj)
// interface Config{
//   type:string;
//   url:string;
//   data?:string;
//   dataType:string;
// }
// function ajax(config:Config){
//  const xhr=new XMLHttpRequest();
//  xhr.open(config.type,config.url,true);//这个地方true表示异步
//  xhr.send(config.data);
//  xhr.onreadystatechange=function(){
//    if(xhr.readyState===4 && xhr.status===200){
//      console.log("成功")
//    }else{
//    }
//  }
// }
// ajax({
//   type:string;
//   url:string;
//   data?:string;
//   dataType:string;
// })
// 加密约束
// interface Config{
//   (key:string,value:string):string;
// }
// var md5:Config=function(key:string,value:string):string{
//    return key+value;
// }
// var md4:Config=function(key:string,value:string):string{
//   return key+'------------------'+value
// }
// console.log(md5('name','zhangsan'))
// console.log(md4('name','zhangsan'))
// 接口来继承接口，或者类继承类
// interface animal{
//   eat():void
// }
// interface person extends animal{
//   word():void
// }
// class Web implements person{
//   public name:string;
//   constructor(name:string){
//     this.name=name
//   }
//   eat(){
//     console.log(`${this.name}--吃东西`)
//   }
//   word(){
//     console.log(`${this.name}--工作`)
//   }
// }
// const H=new Web('小李')
// H.eat()
// H.word()
// interface animal{
//   eat():void
// }
// interface person extends animal{
//   work():void
// }
// class test{
//   public name:string;
//   constructor(name:string){
//    this.name=name
//   }
//   common(){
//     console.log(this.name)
//   }
// }
// class Web extends test implements person{
//   constructor(name:string){
//     super(name)
//   }
//   eat(){
//     console.log(`${this.name}--吃东西`)
//   }
//   work(){
//         console.log(`${this.name}--工作`)
//       }
// }
// const H=new Web('小李')
// H.common()
// T表示泛型，传入什么类型接受就是什么类型
// function getData<T>(value:T):T{
//   return value
// }
// getData<number>(123)
// class Test {
//   public list:number[]=[];
//   add(num:number){
//     this.list.push(num)
//   }
//   min(){
//    const minValue=this.list.reduce((prev,cur)=>{
//     if(prev<cur){
//       return prev
//     }
//     return cur
//    })
//    return minValue
//   }
// }
// const H=new Test()
// H.add(3)
// H.add(11)
// H.add(12)
// H.add(13)
// H.add(2)
// console.log(H.min())
// 函数类型接口
// interface Test{
//   (name:string,value:string):string
// }
// let Person:Test=function(name:string,value:string):string{
//   return name+value
// }
// console.log(Person('name','李四'))
// interface Test<T>{
//    <T>(value:T):T;
// }
// function Person<T>(value:T):T{
//    return value
// }
// let H:Test<string>=Person
// 把类作为参数来约束类型
// class User{
//   name:string | undefined;
//   desc:string | undefined;
// }
// class mySol{
//   add(user:User):boolean{
//     console.log(user)
//   return true
//   }
// }
// const U=new User()
// U.name="张山"
// U.desc="很帅的小伙"
// const M=new mySol()
// M.add(U)
// 修饰器
// function longClass(parms:any){
//   console.log(parms)
// }
// @longClass 
// class HttpClient{
//  constructor(){
//  }
//  getData(){
//  }
// }
