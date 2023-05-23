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





