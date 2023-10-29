import { LitElement,html } from "lit-element";
import StyleSccs from "./my-elementStyle"


export class Imagen1 extends LitElement {

    static get styles(){
        return[
            StyleSccs
        ]
    }
    
    static get properties() {
        return {
            oculto: { type: Boolean },
        };
    }
    
    cambiaComponente() {
        this.oculto = !this.oculto;
    }


    render(){
        return html`
        <section class="contenido">
            <div class="mostrador" id="mostrador">
                <div class="fila">
                    <div class="item">
                        <div class="contenedor-foto">
                        <img src="img/1.png" alt="">
                        </div>
                    <p class="descripcion">Jack Rusel</p>
                    <span class="edad">2 años</span><br>
                <div>
                    <button @click="${this.cambiaComponente}">Adoptar!!</button>
                    ${this.oculto ? '' : html`<my-element1></my-element1>`}
                </div>
            </div>
        </div>
    </div>
</section>
`

    }
    hideItem(itemId) {
        const item = this.shadowRoot.getElementById(itemId);
        if (item) {
            item.hidden = true;
        }
    }
    
}

customElements.define('my-element1', Imagen1);