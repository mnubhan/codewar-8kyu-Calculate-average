function findAverage(array) {
  var result=array.reduce((accumulator,currentValue)=>accumulator+currentValue,0)/array.length
  return array.length ===0 ? 0:result;
}

var find_average = (array) => {  
  return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
}

