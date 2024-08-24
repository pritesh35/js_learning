const accountId = 14453
let accountEmail = " Gpritesh8546@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState; 

// accountId = 2 //NOT ALLOWED

accountEmail = "Griya@gma.com"
accountPassword = "212148"
accountCity = "Bengaluru"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

