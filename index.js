let num=[]
let condition=false;
let sign=[],ex=[]


for(let i=0;i<10;i++){
    num[i]=document.getElementById('num'+String(i))
}
let temp='',ans
let display=document.getElementById('display')
for(let i=0;i<10;i++){
    num[i].addEventListener('click',()=>{
        if(condition){
            temp=''
            display.innerHTML=''
            ex=[]
            condition=false;
        }
        temp+=String(i)
        display.innerHTML+=String(i)
        
    })
}


for(let i=0;i<4;i++){
    sign[i]=document.getElementById('sign'+String(i))
}

for(let i=0;i<4;i++){

    sign[i].addEventListener('click',()=>{
        if(condition){
            temp=''
            display.innerHTML=''
            condition=false;
            ex=[]
        }
    let s;

    if(i==0)s='+'
    else if(i==1)s='-'
    else if(i==2)s='*'
    else if(i==3)s='/'
        if(temp.length>0){
            let last=ex[ex.length-1]
            if(last===0){
                ex[ex.length-1]=Number(temp)
            }
            else ex.push(Number(temp))
            temp=''
        }
        ex.push(s)
        display.innerHTML+=s
        s=''
    })
}
// string expression to math

function parse(str) {
    return Function(`'use strict'; return (${str})`)()
  }


let equal=document.getElementById('equal')
equal.addEventListener('click',()=>{
    if(temp.length>0){
        let last=ex[ex.length-1]
        if(last===0){
            ex[ex.length-1]=Number(temp)
        }
        else ex.push(Number(temp))
        temp=''
    }
    if(ex.length>0){
        let valid=true;
        for(let i=0;i<ex.length-1;i++){
            if(typeof(ex[i])=='string' && typeof(ex[i+1])=='string'){
                valid=false;
            }
        }
        if(typeof(ex[0])=='string' || typeof(ex[ex.length-1])=='string'){
            valid=false;
        }
        for(let i=1;i<ex.length;i+=2){
            if(typeof(ex[i])!='string')valid=false
        }
        if(valid){
            let ex2=''
            for(let i=0;i<ex.length;i++){
                ex2+=String(ex[i])
            }
            ans=parse(ex2)
            display.innerHTML=String(ans)
            condition=true;
        }
    }
})

document.getElementById('clear').addEventListener('click',()=>{
    display.innerHTML=''
    temp=''
    ex=[]
})






