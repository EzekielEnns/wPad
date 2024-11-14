import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";
/*
we can defiantly have non editable values inside the div but they need to follow this format
      //space on each side so that a user can interact with them (less important but kinda)
      <text>&nbsp</text>
        //no user select if they are a button
        <button style="user-select:none;"></button>
      <text>&nbsp</text>

note this breaks indexing, but i feel like there is a way around it 
TODO fix indexing with none editable

we do get an undo stack
very good explanation of what i need
https://medium.com/@tempmailwithpassword/how-to-update-content-in-a-contenteditable-element-while-maintaining-the-undo-stack-e17c48e36466
https://stackoverflow.com/a/62266439


for undo and redo, you actually have to listen for the events via key down y and z,
    and actually manage your own state managment

so what could wasm do?
- be a place to store undo/redo stack
    - reffrence a dom pointer as changing 
        - i.e. style, content
- be a record of dom tree
    - find ways to export dom


okay wait a shit, big brain stuff here....
    you could store the dom tree as a blob
use a mutation observer 
*/

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div display="inline">
      <text>&nbsp</text>
        <button id="counter" style="user-select:none;" type="button"contenteditable="false" ></button>
      <text>&nbsp</text>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
