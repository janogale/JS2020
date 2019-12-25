let mobile = "0654220002"


mobile.startsWith("065") ? "Somtel" : "Telesom"


let email = "myemail@email.com";

let sentence = "hello this sentence contains bad words"

let index = sentence.indexOf("bad")
let nextSpace = sentence.indexOf(" ", index)

sentence.slice(0, index) + "Good" + sentence.slice(nextSpace)

sentence.search(/bads/i)