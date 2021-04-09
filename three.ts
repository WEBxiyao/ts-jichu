// 剩余函数
// function sum(a: number, b: number, c: number, d: number): number {
//     return a + b + c + d
// }
// console.log(sum(1, 2, 3, 4));
// function sum(...result: Array<number>): number {
//     let a = 0
//     for (let index = 0; index < result.length; index++) {
//         a += result[index]

//     }
//     return a
// }
// console.log(sum(1, 2, 3, 4, 10));

// 方法的重载
// function getInfoNew(name: string): string;
// function getInfoNew(age: number): string;
// function getInfoNew(str: number | string): string {
//     if (typeof str === 'string') {
//         return '我的名字叫:' + str
//     } else {
//         return '我的年龄:' + str
//     }
// }
// console.log(getInfoNew('力邀'));
// console.log(getInfoNew(26));
// ts中的类
// class PersonThree {
//     name: string
//     constructor(name: string) {
//         this.name = name
//     }
//     run(): void {
//         alert(this.name)
//     }
// }
// const $P = new PersonThree("力邀")
// $P.run()

// 抽象类，抽象方法，（在抽象类定义了抽象方法，子类必须存在这个抽象方法）
// abstract class AnimalThree {
//     name: string
//     constructor(name: string) {
//         this.name = name
//     }
//     abstract eact(): void
// }
// class DogThree extends AnimalThree {
//     constructor(name: string) {
//         super(name)
//     }
//     eact() {
//         alert(`${this.name}--吃骨头`)
//     }
// }
// const D = new DogThree("小狗")
// D.eact()
//接口
// interface req {
//     type: string;
//     data?: string;
//     url: string;
//     dataType: string;
// }
// function ajax(obj: req) {
//     const xhl = new XMLHttpRequest()
//     xhl.open(obj.type, obj.url)
//     xhl.send(obj.data)
//     xhl.onreadystatechange = () => {
//         if (xhl.status === 200 && xhl.readyState == 4) {
//             if (obj.dataType === 'json') {
//                 console.log(JSON.parse(xhl.responseText))
//             } else {
//                 console.log(xhl.responseText)
//             }
//         }
//     }
// }
// ajax({
//     type: 'get',
//     url: 'http://127.0.0.1:7001/',
//     dataType: 'json'
// })
//接口对数组的约束
// interface userArry{
//     [index:number]:list
// }
// interface list{
//     name:string;
//     age:number
// }
// const user:userArry=[{name:'liyao',age:25}]
//接口对对象的约束
// interface userObj{
//     [index:string]:string
// }
// const user={name:'liyao'}
//接口的 抽象和抽象类
// interface animalThree {
//     name: string;
//     eact(name: string): void
// }
// class dogThree implements animalThree {
//     name: string
//     constructor(name: string) {
//         this.name = name
//     }
//     eact() {
//         console.log(`${this.name}--吃粮食`)
//     }
// }
// const d = new dogThree('小黑')
// d.eact()

//初始泛型
// function Test<T>(value: T): T {
//     return value
// }
// console.log(Test<number>(123));
// const c: number[] = [1, 2]
// const v: Array<string> = ['1', '2']
// class minClass {
//     list: Array<number> = []
//     add(val: number) {
//         this.list.push(val)
//     }
//     min(): number {
//         return Math.min(...this.list)
//     }
// }
// const C = new minClass()
// C.add(1)
// C.add(11)
// C.add(21)
// C.add(13)
// C.add(-13)
// console.log(C.min());

// class minClass<T>{
//     public list: Array<T> = []
//     add(val: T): void {
//         this.list.push(val)
//     }
//     min(): T {
//         let a: T = this.list[0]
//         this.list.forEach(v => {
//             if (a > v) {
//                 a = v
//             }
//         });
//         return a
//     }
// }
// const C = new minClass()
// C.add('a')
// C.add('b')
// C.add('c')
// C.add('e')
// console.log(C.min());

//泛型接口的使用
// interface configfn {
//     <T>(value: T): T
// }
// const setData: configfn = <T>(value: T): T => {
//     return value
// }
// console.log(setData<string>("123"))
// interface configfn<T> {
//     (value: T): T
// }
// const setData: configfn<string> = <T>(value: T): T => {
//     return value
// }
// console.log(setData("123"))

//把类当作验证参数使用
// interface user {
//     username: string;
//     password: string;
// }
// class User {
//     username: string | undefined;
//     password: string | undefined;
//     constructor(parmas: user) {
//         this.username = parmas.username
//         this.password = parmas.password
//     }
// }
// class mySol<T> {
//     add(user: T): boolean {
//         console.log(user);
//         return true
//     }
// }
// const U = new User({
//     username: '张山',
//     password: '123'
// })
// const M = new mySol<User>()
// M.add(U)

//使用类来定义增删改查
// interface DBI<T> {
//     add(info: T): boolean;
//     update(info: T, id: number): boolean;
//     remove(id: number): boolean;
//     get(id: number): Array<any>;
// }
// class mysoql<T> implements DBI<T> {
//     add(info: T) {
//         console.log(info, "----");
//         return true
//     }
//     update(info: T, id: number) {
//         return true
//     }
//     remove(id: number) {
//         return true
//     }
//     get(id: number) {
//         return []
//     }
// }
// interface user {
//     username: string;
//     password: string;
// }
// class User {
//     username: string | undefined;
//     password: string | undefined;
//     constructor(info: user) {
//         this.username = info.username
//         this.password = info.password
//     }
// }
// const U = new User({ username: '张山', password: '123' })
// const M = new mysoql<User>()
// M.add(U)

//装饰器(普通不带参数)
// function decoration(parmas: any) {
//     console.log(parmas, "装饰器");
//     parmas.prototype.name = "我是一个装饰器"

// }
// @decoration
// class myClass {
//     getData() {

//     }
// }
// const M: any = new myClass()
// console.log(M.name);

//装饰器(装饰器工厂可传参数)
// function decoration(val: string) {
//     console.log(val, "--装饰器传的参数---");
//     return (parmas: any) => {
//         console.log(parmas, "装饰器");
//         parmas.prototype.name = "我是一个装饰器"

//     }
// }
// @decoration('123')
// class myClass {
//     getData() {

//     }
// }
// const M: any = new myClass()
// console.log(M.name);
//装饰器的重载
// function decoration(parmas: any) {
//     return class extends parmas {
//         url: string = "http:aiqiyi"
//     }
// }
// @decoration
// class myClass {
//     url: string
//     constructor() {
//         this.url = "http:baidu"
//     }
// }
// const M = new myClass()
// console.log(M.url);

//属性装饰器
function logdecoration(parmas: any) {
    console.log(parmas, "****");

    return (target: any, name: string) => {
        console.log(target, name, "---");
        target[name] = 'http://aiqiyi'
    }
}
class myClass {
    @logdecoration('http://baidus')
    url: string | undefined
    @logdecoration('http://baidus')
    key: string | undefined
    getData() {
        console.log(this.url);

    }
}
const M = new myClass()
M.getData()