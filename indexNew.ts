// 这个是第二次学习ts
var flag:boolean=true
console.log(flag)
const testdd=1
// 数组的定义有3种
var arr1:number[]=[1,2,3]
var arr2:Array<string>=['1','2','3']
var arr3:any[]=[1,'2',false]

// 枚举值的定义  首字母必须是大写
enum Flag {success=0,error=1}
let s:Flag=Flag.success
let e:Flag=Flag.error
console.log(s,e)

enum Cart {bwm,audi,jeep=3,toyta}
let b:Cart=Cart.bwm
let a:Cart=Cart.audi
let j:Cart=Cart.jeep
let t:Cart=Cart.toyta
console.log(b,a,j,t)//0,1,3,4如果没有值得话就取值他的索引，但是如果有值了后面的值就以前面的值

// undefined类型要想申明一个变量为，必须要写
var und:number | undefined

// void在ts中表示没有任何类型 ，一般用在函数没有返回值
function test():void{
    console.log("123")
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
function getDate(name:string,age?:number):string{
    return `${name}-${age}`
}
console.log(getDate('liyao'))

// 剩余参数
function buildName(firstName:string,...restOfName:Array<string>){
    return firstName+" "+restOfName.join("")

}
let aName = buildName("Lili", "John", "David", "Durban");
console.log(aName);
// function buildName(firstName: string, ...restOfName: string[]) {
//     return firstName + " " + restOfName.join(" ");
// }

// let buildNameFunc: (fname: string, ...rest: string[]) => string = buildName;

// console.log(buildNameFunc("John", "Julia", "July"));

// 方法重载
function getInfo(name:string):void;
function getInfo(age:number):void;
function getInfo(str:any):void{
   if(typeof str==='string'){
       console.log('名字',str)
   }else if(typeof str==='number'){
       console.log('年龄',str)
   }
}
getInfo(123)

// class类的写法
class person {
 name:string;
 constructor(name:string){
    this.name=name
 }
 getValue():string{
     return `这是获取的值${this.name}`
 }
 setValue(name:string):void{
     this.name=name
 }
}

const P=new person("liyao")
console.log(P.getValue())
P.setValue("zhangmei")
console.log(P.getValue())


// 继承
class cart {
    name:string;
    constructor(name:string){
       this.name=name
    }
    run():string{
        return `${this.name}--在赛道上跑`
    }
   }
   class bwm extends cart{
     constructor(name:string){
         super(name)
     }  
   }
   const bw=new bwm('320')
   console.log(bw.run())
