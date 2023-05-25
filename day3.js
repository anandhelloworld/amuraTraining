//objects :


let abc={
    a:1,
    b:2,
    c:3,
    a:20
}
    
for (let item in abc) {
    console.log(item)}

let b =abc;
let z="a";

b.a=10
for (let item in b) {
    console.log(b[item])
}
let ob2={
}

for (let item in abc) {
    ob2[item]=abc[item]
}
console.log("new obj by value",ob2)
ob2.a=25;
console.log("ob2:",ob2)
console.log("abc:",abc)
console.log("b:",b)



//Promises
function promise (resolve,reject){
    
    let a=1==1
    
     if(a){
        resolve()
    }else{
        reject()
    }
}

function resolve(){
   console.log("resolved")
}

function reject(){
     console.log("reject")
}

promise(resolve,reject)


















let cart=["shoes","watch"]

let cartCheckout = new Promise((res,rej)=>{
    if(true){
        res("1")
    }else{
        rej("0")
    }
})
cartCheckout.then((data)=>{
    console.log(data)
    return "3"
})
.then((dat)=>{
    console.log(dat)
})


.catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("finaaly do it")
})



let cart=["shoes","watch"]

let cartCheckout = new Promise((res,rej)=>{
    setTimeout(()=>{
        if(true){
        res("1")
    }else{
        rej("0")
    }
    },5000)
    
})
console.log(cartCheckout)
cartCheckout.then((data)=>{
    console.log(data)
    return "3"
})
.then((dat)=>{
    console.log(dat)
})catch().then().then()
.catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("finaaly do it")
})

console.log(cartCheckout)

 let takingInfo = new promise()
 



