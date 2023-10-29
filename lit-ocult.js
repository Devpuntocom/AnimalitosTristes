import { LitElement, html } from 'lit-element';

class ComponenteOcultable extends LitElement {
  static get properties() {
    return {
      oculto: { type: Boolean },
    };
  }

  cambiaComponente() {
    this.oculto = !this.oculto;
  }
  
  render() {
    return html`
      <div>
        <button @click="${this.cambiaComponente}">Toggle Element</button>
        ${this.oculto ? '' : html`<my-element></my-element>`}
      </div>
    `;
  }
}

customElements.define('lit-component', ComponenteOcultable);