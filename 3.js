import {get as g} from 'axios';
const URL = 'http://localhost:4321/length?'
const testValues = [
    {"value": "www", "expected": 3},
    {"value": "q", "expected": 1},
];
(async()=>{
  for (const o of testValues) {
    const {data} = await g(`${URL}${o.value}`);
    console.log(data, ` and expected: ${o.expected}`)
  }
})();
