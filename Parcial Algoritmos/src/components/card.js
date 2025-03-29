class Card extends HTMLElement {
    static get observedAttributes() {
        return ['destino','duracion','costo','descripcion','actividades','imagen','calificacion','alojamiento'];
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
    this.render();
    }
    attributeChangedCallback(name, oldValue, newValue) { 
        if (name === 'chapter' && oldValue !== newValue) {
            this.render();
        }
    }
    render(){
        this.shadowRoot.innerHTML= `
        <style>
                    div {
                        border: 1px solid #ccc;
                        border-radius: 8px;
                        padding: 16px;
                        margin: 10px;
                        text-align: center;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                        background-color: gray;
                    }
                    p {
                        margin: 8px 0;
                        font-family: Arial, sans-serif;
                    }
                    img {
                        max-width: 150px;
                        border-radius: 8px;
                    }
                </style>
         <div id="img">
                    <p>${this.getAttribute('images')}</p>
                </div>
       <div id="destino">
                    <p>${this.getAttribute('destino')}</p>
                </div>
                <div id="duracion">
                    <p>${this.getAttribute('duracion')}</p>
                </div>
                <div id="costo">
                    <p>${this.getAttribute('costo')}</p>
                </div>
                <div id="descripcion">
                    <p>${this.getAttribute('descripcion')}</p>
                </div>
                <div id="actividades">
                    <p>${this.getAttribute('actividades')}</p>
                </div>
                <div id="calificacion">
                    <p>${this.getAttribute('calificacion')}</p>
                </div>
                <div id="alojamiento">
                    <p>${this.getAttribute('alojamiento')}</p>
                </div>
                `;

    }
}
 customElements.define('product-card',Card)
 export default Card;
