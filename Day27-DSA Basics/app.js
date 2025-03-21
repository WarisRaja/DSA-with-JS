a= 45;
var a; //we can declare variable after using it i.e in above, but it bad practice.
console.log(a)


b =45;
//let b;
console.log(b)

function sum(){
  let a=45;
  let b=10;
  console.log("sum of "+a +"and "+ b +" is " + a+b);
}
//sum()

function take(){
  let data = Number(prompt("Enter any number"));
  console.log(data)

}
//take()

function incre(){
  let a= true;
  ++a; //in js ,it is valid but in other error
  console.log(a)
}
incre()