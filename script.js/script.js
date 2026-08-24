console.log('hello');
//prompt==>degree
//degree >100==>invalid
//degree==>90< 100==>A
//degree==>80< 90==>B
//degree==>70< 80==>c
//degree < 60==>F
let degree = prompt("Enter your degree:");

degree = Number(degree);

if (degree > 100) {
    console.log("Invalid");
}
else if (degree >= 90) {
    console.log("A");
}
else if (degree >= 80) {
    console.log("B");
}
else if (degree >= 70) {
    console.log("C");
}
else if (degree >= 60) {
    console.log("D");
}
else {
    console.log("F");
}