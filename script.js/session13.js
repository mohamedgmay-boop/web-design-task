function looping(){
    let start = Number(prompt("enter start:"));
    let end = Number(prompt("enter end:"));
    for (let i =start; i<=end;i++){
        if(i===5){
            continue;
        }
        if(i===8){
            break;
        }
 console.log(i);
    }
    }
looping();