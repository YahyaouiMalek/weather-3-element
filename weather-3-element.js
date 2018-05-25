import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `weather-3-element`
 * This element will soon display the weather of the desired city
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class Weather3Element extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>I will soon show you [[city]]'s Weather :)</h2>
    `;
  }
  static get properties() {
    return {
      city: {
		type: String,
		value: 'Tunisia'
	  },
    };
  }
}

window.customElements.define('weather-3-element', Weather3Element);
