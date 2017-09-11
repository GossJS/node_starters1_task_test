import {get as g} from 'axios';

g('http://localhost:4321/length?qqqqqq')
.then(({data})=>console.log(data))
.catch(e=>console.error(e));

//don't forget to launch node_starters_task_done
//expecting to see 6
