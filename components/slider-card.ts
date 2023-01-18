import { LitElement, html, css } from "lit";
import { customElement, property } from 'lit/decorators.js';
// import 'swiper/css';
// import 'swiper/css/navigation';

@customElement('slider-card')
export class SliderCard extends LitElement {

    @property({type: String})
    name: name = 'world'

    static styles = [
        css`
            /* :host {
                display: block;
                background: linear-gradient(60deg, red, blue);
                color: #fff;
                padding: 20px 40px;
                width: 100px;
            }
             */
            .slider-item {
                box-sizing: border-box;
                scroll-snap-align: center;
                flex: none;
                background: var(--item-background, aliceblue);
                border: var(--item-border);
                font-size: 20px;
                width: var(--item-width, 189px);
                font-family: sans-serif;
                color: var(--item-color, #fff);
                box-shadow: 5px 5px 10px purple, -5px -5px 10px blue;
            }

            .slider-item-content {
                padding: 20px 20px 0px 20px;
                /* height: 44px; */
                height: auto;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical; 
                overflow: hidden;
                border-bottom: 20px solid var(--item-background);
            }

            .slider-item-content h2, h3, h4, h5, figcaption {
                margin-top: 0;
                font-family: 'Roboto', sans-serif;
                font-size: 18px;
                line-height: 22px;
                font-weight: 600;
                position: relative;
            }
            .slider-item-content p {
                font-size: 12px;
            }

            .slider-item:hover .slider-item-content{
                transition: ease-in-out 0.19s;
                background: var(--item-background-hover);
                border-bottom: 20px solid var(--item-background-hover);
            }

            .slider-item img {
                width: 100%;
                display: block;
                /* filter: saturate(4); */
                filter: invert(100%)
            }
            .slider-item:hover {
                transition: ease-in-out 0.19s;
                cursor: pointer;
                transform: scale(1.02);
                box-shadow: 3px 3px 25px purple, -3px -3px 25px blue;
            }

            /* .slider-item-video {
                position: relative;
            } */
            .image-wrapper {
                position: relative;
                width: 100%;
                max-height: 336px;
                aspect-ratio: .526;
                overflow: hidden;
            }
            /* .slider-item-video .image-wrapper:before,
            .slider-item-video .image-wrapper:after {
                content: "";
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 46px;
                height: 46px;
                display: block;
                border-radius: 50%;
                background-color: hsla(0, 50%, 100%, 0.8);
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
            } */
            /* .slider-item-video .image-wrapper:after {
                content: "";
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(calc(50% - 15px), -50%) rotate(45deg);
                width: 0px;
                height: 0px;
                border-radius: 0;
                border-top: 6px solid black;
                border-right: 6px solid black;
                border-left: 6px solid transparent;
                border-bottom: 6px solid transparent;
                background-color: transparent;
                box-shadow: none;
            }
            .slider-item-video {
                background: var(--item-background);
                color: #fff;
            }
            .slider-item-video:hover .image-wrapper:before {
                background: hsla(353, 96%, 56%, 0.7);
                transition: ease-in-out 0.19s;
            }
            .slider-item-video:hover {
                background: hsl(351, 80%, 50%);
                color: #fff;
            } */
           
        `
    ];

    constructor(){
        super()
        // this.name = 'world'
    }

    render(){
        return html`
        <figure class="slider-item" data-video-id="x_9pslQU9Bk" tabindex="0" >
        <div class="image-wrapper">
            <img src="https://picsum.photos/350/350">
        </div>
        <figcaption title="Lorem ipsum dolor sit amet consectetur adipiscing elit. Vivamus porta lacinia est nec ultricies. Nam tincidunt velit nunc, ac ultrices tortor mollis vitae." class="slider-item-content">
            ${this.name}
            <slot></slot>
        </figcaption>
    </figure>
    `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'slider-card' : SliderCard
    }
}