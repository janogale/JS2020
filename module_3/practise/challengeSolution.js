function sumArrayElements(arr){
  let total = 0;
  
  for(let e of arr){
    //isNaN(true)
    if(!isFinite(e)) continue
   // if(typeof e != 'number') continue;
    total += e
  }
  
  return total
}

let arr = [2,3,'a', 4, true, true, undefined]

//sumArrayElements(arr)


function getMaxElement(arr){
  let max = 0;
  
  for(let e of arr){
    if(typeof e !== 'number') continue;
    if(e > max) max = e;
  }
  
  return max
}

//getMaxElement([6, 2,3,5, 10])



let isEqual = (a, b) => {
  
  return a === b
  
 // ===  strict equality  checks value and type
 // ==   loose equality only checks value
//   if(typeof(a) != typeof(b)) return false
//   if(a != b) return false;
  
//   return true
}



//isEqual(2, 2)


let isDivisibleBy10 = function(num){
 return num % 10 == 0 ? true : false;
//  if(num / 10 == 1) return true;
  
//   return false
}

//isDivisibleBy10(110)


function repeat(str, n){
  let repeated = '';
  
  do{
    repeated += ' ' + str;
   
  }while(--n)

    return repeated;
}

//repeat("Somaliland", 5)


function findIndex(arr, element){
 
  for(let i = 0; i < arr.length; i++){
    
    if(arr[i] == element){
      return i;
    }
    
  }
  
  return -1
  
}


//findIndex([2,3,4,5, "hello"], "4")


function calculate(num1, operator, num2){
 switch(operator){
   case "+": return num1 + num2
   case "-": return num1 - num2
   case "*": return num1 * num2
   case "/": return num1 / num2
   case "**": return num1 ** num2
   default:
     return 0
 }
}



calculate(3, "**", 4)






