import axios from 'axios';
import should from 'should';

const URL = 'http://localhost:4321/length?'
const testValues = [
    {"value": "www", "expected": 3},
    {"value": "q", "expected": 1},
];

testValues.forEach (
			o=>it('returns length after ?', ()=>
		  			axios.get(URL+o.value).should.eventually.have
     	  		.property('data', o.expected)
			)
);
