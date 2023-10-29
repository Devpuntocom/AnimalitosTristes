import { LitElement, html } from 'lit-element';

class MyElement extends LitElement {
  static get properties() {
    return {
      dict1: { type: Object },
      dict2: { type: Object }
    };
  }

  constructor() {
    super();
    this.dict1 = {
      "key1": "value1",
      "key2": "value2",
      "key3": "value3"
    };
    this.dict2 = {
      "key1": "newvalue1",
      "key2": "newvalue2",
      "key3": "newvalue3"
    };
  }

  render() {
    return html`
      <p>${this.dict1['key1']} - ${this.dict2['key1']}</p>
      <p>${this.dict1['key2']} - ${this.dict2['key2']}</p>
      <p>${this.dict1['key3']} - ${this.dict2['key3']}</p>
    `;
  }
}

customElements.define('my-elemento', MyElement);
