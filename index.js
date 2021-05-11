// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>RXJS</h1>`;

import { Observable } from 'rxjs';

var myobserv = Observable.create(ob => {
  ob.next(1);
  ob.next(2);
  ob.next(3);
  ob.next(4);
});

myobserv.subscribe(res => {
  console.log(res);
});
