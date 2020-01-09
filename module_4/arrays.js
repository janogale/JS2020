let mixedArray = ["hello", 1, false, undefined, NaN, "yes", 2020, "2020", true]



function getOnlyString(v){
  if(typeof v == 'string') return v
}


mixedArray.findIndex( element => typeof element == 'string')

