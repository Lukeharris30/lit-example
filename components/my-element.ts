import { LitElement, html, css } from "lit";
import { customElement, property } from 'lit/decorators.js';

@customElement('my-element')
export class MyElement extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
                background: linear-gradient(60deg, red, blue);
                color: #fff;
                padding: 40px;
            }
        `
    ];

    @property() name = "World";

    render(){
        return html`<h1>Hello, ${this.name}</h1>`
    }
}