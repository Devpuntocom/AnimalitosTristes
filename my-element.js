import { LitElement,html } from "lit-element";
import StyleSccs from "./my-elementStyle"


export class MyElement extends LitElement {

    static get styles(){
        return[
            StyleSccs
        ]
    }
    static get propiedades() {
        return {
          oculto: { type: Boolean },
        };
      }
    
    constructor() {
        super();
        this.oculto = false;
    }
    
    cambiaComponente() {
        this.oculto = !this.oculto;
        this.requestUpdate();
        
        
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
                    <button @click="${this.cambiaComponente}">!ADOPTAR!</button>
                    <div style="display: ${this.oculto ? 'block' : 'none'}"}"><componente-formulario></componente-formulario></div>
                </div>
                <div class="item" >
                    <div class="contenedor-foto">
                        <img src="img/2.png" alt="">
                    </div>
                    <p class="descripcion" id>BullDog </p>
                    <span class="edad">4 años</span><br>
                    <button @click="${this.cambiaComponente}">!ADOPTAR!</button>
                    <div style="display: ${this.oculto ? 'block' : 'none'}"}"><componente-formulario></componente-formulario></div>
                </div>
                <div class="item" >
                    <div class="contenedor-foto">
                        <img src="img/3.png" alt="">
                    </div>
                    <p class="descripcion">Pastor Aleman
                    </p>
                    <span class="edad">3 años</span><br>
                    <button @click="${this.cambiaComponente}">!ADOPTAR!</button>
                    <div style="display: ${this.oculto ? 'block' : 'none'}"}"><componente-formulario></componente-formulario></div>
                </div>
                <div class="item" >
                    <div class="contenedor-foto">
                        <img src="img/4.png" alt="">
                    </div>
                    <p class="descripcion">Huskie</p>
                    <span class="edad">5 meses</span><br>
                    <button @click="${this.cambiaComponente}">!ADOPTAR!</button>
                    <div style="display: ${this.oculto ? 'block' : 'none'}"}"><componente-formulario></componente-formulario></div>
                </div>
            </div>
            <div class="fila">
                <div class="item" >
                    <div class="contenedor-foto">
                        <img src="img/5.png" alt="">
                    </div>
                    <p class="descripcion">Shar Pei</p>
                    <span class="edad">3 meses</span><br>
                    <button @click="${this.cambiaComponente}">!ADOPTAR!</button>
                    <div style="display: ${this.oculto ? 'block' : 'none'}"}"><componente-formulario></componente-formulario></div>
                </div>
                <div class="item" >
                    <div class="contenedor-foto">
                        <img src="img/6.png" alt="">
                    </div>
                    <p class="descripcion">Gato X</p>
                    <span class="edad">1 año</span><br>
                    <button @click="${this.cambiaComponente}">!ADOPTAR!</button>
                    <div style="display: ${this.oculto ? 'block' : 'none'}"}"><componente-formulario></componente-formulario></div>
                </div>
                <div class="item" >
                    <div class="contenedor-foto">
                        <img src="img/7.png" alt="">
                    </div>
                    <p class="descripcion">Donatelo</p>
                    <span class="edad">1 año</span><br>
                    <button @click="${this.cambiaComponente}">!ADOPTAR!</button>
                    <div style="display: ${this.oculto ? 'block' : 'none'}"}"><componente-formulario></componente-formulario></div>
                </div>
                <div class="item" >
                    <div class="contenedor-foto">
                        <img src="img/8.png" alt="">
                    </div>
                    <p class="descripcion">Guacamaya</p>
                    <span class="edad">2 meses creo</span><br>
                    <button @click="${this.cambiaComponente}">!ADOPTAR!</button>
                    <div style="display: ${this.oculto ? 'block' : 'none'}"}"><componente-formulario></componente-formulario></div>
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

customElements.define('my-element', MyElement);