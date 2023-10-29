import { LitElement,html } from "lit-element";
import StyleSccs from "./my-elementStyle"


export class header extends LitElement {

    static get styles(){
        return[
            StyleSccs
        ]
    }
    render(){
        return html`
        <header>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
        </ul>
      </nav>
    </header>
`
    }
}

customElements.define('my-element2', header);