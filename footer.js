import { LitElement,html } from "lit-element";
import StyleSccs from "./my-elementStyle"


export class footer extends LitElement {

    static get styles(){
        return[
            StyleSccs
        ]
    }
    render(){
        return html`
        <footer>
            <p>LOS MAS DUROS DEL SENA</p>
        </footer>
  
`
    }
}

customElements.define('my-element3', footer);