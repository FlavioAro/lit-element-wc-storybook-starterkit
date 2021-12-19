import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import styles from './styles.scss';

@customElement('ds-button')
export default class DSButton extends LitElement {

    @property({ type: String }) color = 'primary';

    @property({ type: String }) size = 'medium';

    @property({ type: Boolean }) disabled = false;

    static get properties() {
        return {
          color: { type: String },
          size: { type: String },
          disabled: { type: Boolean }
        };
    }

    constructor() {
        super();
    }

    static get styles() {
        return [styles];
    }

  render() {
    return html`
      <button class="
          button 
          button--${this.color}
          button--${this.size}" 
          ?disabled=${this.disabled}
      >
          <slot></slot>
      </button>
    `;
  }
}