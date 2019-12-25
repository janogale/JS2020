
// capitalize first letter.
var name = "ahmed"

var name = name.charAt(0).toUpperCase() + name.slice(1)

name


// is this number from telesom ?

let mobile = "0634220002"

mobile.startsWith("063") ? "Telesom" : "Not Telesom"

// is this valid email ? if not correct it
let myEmail = "invlaidemail#.com"

myEmail.includes("@") ? "Valid" : "Invalid"

// replace # with @ and re-assign

myEmail = myEmail.replace("#", "@")

myEmail.includes("@") ? "Valid" : "Invalid"

// replace bad words

let sentence =  "this sentences contains oh bad words yeay"

let correctedSentence = sentence.replace("oh",  "").replace("bad", "good").replace("yeay", "yes")

correctedSentence


