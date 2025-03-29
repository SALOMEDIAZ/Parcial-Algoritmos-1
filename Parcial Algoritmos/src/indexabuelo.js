class CardsContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }
    render(){
        this.shadowRoot.innerHTML=  ` `;
    }
}
customElements.define('card-container',CardsContainer); 
export default CardsContainer