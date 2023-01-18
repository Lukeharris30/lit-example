import { LitElement, html, css } from "lit";
import { customElement, property } from 'lit/decorators.js';
import Swiper, {Navigation, A11y} from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';

let videoSwiperArgs = {
    modules: [Navigation, A11y],
    // direction: 'vertical',
    loop: true,
  
    // slidesPerView: 'auto',
    spaceBetween: 26,
    a11y: {
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
      },
    paginationElement: 'button',
    keyboard: {
        enabled: true
    },
    navigation: {
        nextEl: '.next',
        prevEl: '.prev'
    },
    on: {
        reachEnd: function() {
            this.el.classList.remove('shadow-right')
        },
        reachBeginning: function() {
            this.el.classList.remove('shadow-left')
        },
        fromEdge: function() {
            this.el.classList.add('shadow-right')
            this.el.classList.add('shadow-left')
        }
    }
}


@customElement('slider-wrapper')
export class SliderWrapper extends LitElement {
    static properties = {
        name: {},
    };
    static styles = [
        css`
            :host {
                /* display: block;
                background: linear-gradient(60deg, red, blue);
                color: #fff;
                padding: 40px; */
            }
            
            .swiper {
                grid-column: 2;
                min-width: 350px;
                width: 100%;
                margin-bottom: 10px;
                position: relative;
                padding: 15px 0;
            }
            .shadow-right::after {
                content: '';
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                z-index: 100;
                box-shadow: 
                inset 0 15px 0px 0px white, 
                inset 0 -15px 0px 0px white, 
                inset 6px 0 15px -4px transparent,
                inset -6px 0 15px -4px rgba(0, 0, 0, 0.7);
                pointer-events: none;
                margin: -5px 0;
            }
            .shadow-left::before {
                content: '';
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                z-index: 100;
                box-shadow: 
                inset 0 15px 0px 0px white, 
                inset 0 -15px 0px 0px white, 
                inset 6px 0 15px -4px rgba(0, 0, 0, 0.7),
                inset -6px 0 15px -4px transparent;
                pointer-events: none;
                margin: -5px;
            }

        `
    ];
    constructor(){
        super()
        this.name = 'world'
        this.swiper = new Swiper(this, 
            videoSwiperArgs
        )
    }

    render(){
        return html`
        <section class="video-slider-container">
        <div class="swiper">
            <div class="swiper-wrapper">
                <!-- <h1>Hello, ${this.name}</h1> -->
                <slot name="my-text"></slot>
            </div>
        </div>
    </section>
        `
    }
}