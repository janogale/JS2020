function salaan(){
  console.log("Hello students")
}


//salaan()


      let target = "global variable"



function greeting(){

  console.log(`hello ${target}`)
}

console.log(target)

greeting()



function greeting(who = 'Guest'){
  console.log(`How are you ${who}`)
}


greeting("Ahmed")
greeting("Hamda")
greeting()


function power(base = 0, pow = 1){
    return base ** pow
}


let result = power(2, 5) - 2


console.log(result)




function power(base, pow){
  
  return base ** pow;
}


function sum(n1, n2){
  return n1 + n2
}

let num1 = prompt("What is the base Number?")

let num2 = prompt("What is the power Number?")

// convert value to number explicityly.
num1 = Number(num1)
num2 = Number(num2)


console.log(power(num1, num2))

console.log(sum(num1, num2))









