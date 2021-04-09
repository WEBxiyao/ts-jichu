namespace Home{
    class Header{
        constructor(){
            const elet=document.createElement("div")
            elet.innerText="我是头部文件"
            elet.style.backgroundColor="red"
            document.body.appendChild(elet)
        }
    }
    
    class Content{
        constructor(){
            const elet=document.createElement("div")
            elet.innerText="我是中间的内容"
            elet.style.backgroundColor="yellow"
            document.body.appendChild(elet)
        }
    }
    class Footer{
        constructor(){
            const elet=document.createElement("div")
            elet.innerText="我是底部的导航"
            elet.style.backgroundColor="blue"
            document.body.appendChild(elet)
        }
    }
   export class Page{
        constructor(){
            new Header()
            new Content()
            new Footer()
        }
    }
}