import './style.css'
 //import { BreakingbadApp } from './src/breakingbad/breakingbad-app'
import { UsersApp } from './src/users/users-app.js';


document.querySelector('#app').innerHTML = `
  <div>

    <h1 id ="app-title">Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>

  </div>
`
const element =document.querySelector('.card');
//BreakingbadApp(element);

UsersApp(element);
