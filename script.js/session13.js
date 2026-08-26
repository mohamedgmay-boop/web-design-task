// function looping(){
//     let start = Number(prompt("enter start:"));
//     let end = Number(prompt("enter end:"));
//     for (let i =start; i<=end;i++){
//         if(i===5){
//             continue;
//         }
//         if(i===8){
//             break;
//         }
//  console.log(i);
//     }
//     }
// looping();
let tracks= ["web design" , "network" , "ux"]
function looping() {
    let tracks = ["Web Design", "Network", "UX"];

    let search = prompt("Enter track:");

    let found = false;

    for (let i = 0; i < tracks.length; i++) {
        if (tracks[i] == search) {
            console.log(tracks[i]);
            found = true;
            break;
        }
    }

    if (found == false) {
        console.log(tracks);
    }
}

looping();