import {get as g} from 'axios';
const URL = 'http://localhost:4321/length?'
const testValues = [
    {"value": "www", "expected": 3},
    {"value": "q", "expected": 1},
];
testValues.forEach(x=>{
  g(`${URL}${x.value}`)
  .then(({data})=>console.log(data, `expected: ${x.expected}`))
  .catch(e=>console.error(e));

});
