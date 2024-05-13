console.log("Milind")

console.log("Milind")

const accountId = 12345
let accountEmail = "milind@gmail.com"
var accountPassword = "454545"
accountCity = "Jaipur"
let accountState;

// can't change const value
/*
prefer not to use var
because of issue with block scope and functional scope
*/

accountEmail = "badsar@gmail.com"
accountPassword = "212121"
accountCity = "Noida"

console.log(accountId)

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])