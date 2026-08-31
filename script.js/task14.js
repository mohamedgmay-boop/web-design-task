let users = [];
function adduser() {
    let name = prompt("enter your name");
    let id = prompt("enter your id");
    let Balance =  Number(prompt("enter your Balance"));
  let user = {
    name: name,
    id: id,
    Balance: Balance
  };
  users.push(user);
  console.log(users)
}
 adduser()
  adduser()
   adduser()
// اول فانكشن
 
function edituserBalanceBYID() {
    let id = prompt("enter the ID:");
    let newbalance = Number(prompt("enter the new Balance"));
    let user = users.find(u=> u.id==id);
    if(user) {
        user.Balance = newBalance;
    }
}
edituserBalanceBYID()
edituserBalanceBYID()
edituserBalanceBYID()
// تاني فانكشن
function transferBalance() {
    const fromID = prompt("Enter Sender ID (fromID):")?.trim();
    const toID = prompt("Enter Receiver ID (toID):")?.trim();
    const amount = Number(prompt("Enter Amount to transfer:"));

    if (!fromID || !toID) {
        alert("Sender and receiver IDs are required!");
        return;
    }
    if (fromID === toID) {
        alert("Sender and receiver cannot be the same!");
        return;
    }
    if (!Number.isFinite(amount) || amount <= 0) {
        alert("Enter a valid amount greater than 0!");
        return;
    }

    const senderIndex = users.findIndex(u => u.id === fromID);
    const receiverIndex = users.findIndex(u => u.id === toID);

    if (senderIndex === -1) {
        alert("Sender user not found!");
        return;
    }
    if (receiverIndex === -1) {
        alert("Receiver user not found!");
        return;
    }
    if (users[senderIndex].balance < amount) {
        alert("Insufficient funds!");
        return;
    }

    users[senderIndex].balance -= amount;
    users[receiverIndex].balance += amount;
    alert("Transfer successful!");
}
transferBalance()
transferBalance()
transferBalance()
// تالت فانكشن 
function deleteUserByID(){
    let id =prompt("enter the id:");
    users = users.filter( u=> u.id !==id);
}
deleteUserByID()
deleteUserByID()
deleteUserByID()