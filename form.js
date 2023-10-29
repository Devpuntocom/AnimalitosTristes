import { LitElement, html } from 'lit-element';
import StyleSccs from "./fromStyles";

class ComponenteFormulario extends LitElement {
    static get styles(){
        return[
            StyleSccs
        ]
    }


static get properties() {
    return {
        nombre: { type: String },
        email: { type: String },
        mensaje: { type: String },
    };
}

constructor() {
    super();
    this.nombre = '';
    this.email = '';
    this.mensaje = '';
}

enviarFormulario() {
    


    const datosFormulario = {
        nombre: this.nombre,
        email: this.email,
        mensaje: this.mensaje,
    };
    
}

enviaNombre(evento) {
    this.nombre = evento.target.value;
}

enviaEmail(evento) {
    this.email = evento.target.value;
}

enviaMensaje(evento) {
    this.mensaje = evento.target.value;
}

render() {
    return html`
        <form>
        <label>
            Nombre:
            <input type="text" @input=${this.enviaNombre}>
        </label>
        <label>
            Email:
            <input type="email" @input=${this.enviaEmail}>
        </label>
        <label>
            Mensaje:
            <textarea @input=${this.enviaMensaje}></textarea>
        </label>
        <button type="button" @click=${this.enviarFormulario}>Enviar</button>
        </form>
    `;
}
}

customElements.define('componente-formulario', ComponenteFormulario);