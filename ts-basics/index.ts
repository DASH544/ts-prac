let fNmae:string="Dash"
function sayHello(name:string)
{
    console.log(name)
}
sayHello(fNmae)

let a:number=10
let b:number=10
function sum(a:number,b:number):number
{
    return a+b
}
function ageCheck(age:number):boolean
{
    if(age<18)
        {
            return false
        }
    else
    {
        return true
    }
}
console.log(ageCheck(20));

function delayedFn()
{
    console.log("hello")
}
function delay(fn:()=>void ,delay:number)
{
    setTimeout(fn,delay)
}
delay(delayedFn,1000)