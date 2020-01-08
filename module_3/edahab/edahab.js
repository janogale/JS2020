function edahabApp() {

    let balance = 1200;
    let pin = 2233


    let password = prompt("what is your pin?")

    // if pin is incorrect stop operation
    if (password != pin) return alert("Your PIN is Incorrect");

    let option = prompt(`
   1: Check your balance.
   2: Send Money
   3: Withdrawal from Bank
   `)

    // check option

    switch (option) {
        case "1":
            alert(`your current balance is ${balance}`);
            break;
        case "2":
            sendMoney(balance)
            break;
        case "3":
            Withdrawal(balance)

    }



}





function sendMoney(currentBalance) {
    let mobile = prompt("Please Enter Mobile")

    if (!(mobile.startsWith("065") && mobile.length == 10)) {
        alert("Mobile is incorrect")
        return;
    }

    let amount = prompt("what is acount to send")

    if (amount > balance) return alert("Insufficient Balance")

    alert(`${amount} is sent to ${mobile} your current balance is ${currentBalance - amount}`)
}


function Withdrawal(balance) {
    alert(`your withdrawal is ${balance + 10}`)
}