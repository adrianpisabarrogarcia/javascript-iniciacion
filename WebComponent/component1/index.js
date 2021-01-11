class SellButton extends HTMLElement {
    constructor(){
        //lama al constructor de HTMLElement
        super();
    }
    //dispara cuando ejecuta el DOM
    connectedCallback(){
        /*this.innerHTML = `
            <div>
                <button>Comprar ahora</button>
            </div>    
        `

         */
        let shadowRoot = this.attachShadow({mode: 'open'})
        shadowRoot.innerHTML =
            `
            <style>
                :host {
                    --orange: #e67e22;
                    --space: 1.5em;
                }
                .btn-container{
                    border: 2px dashed var(--orange);
                    padding: var(--space);
                    text-align: center;
                }
                .btn{
                    background-color: var(--orange);
                    border: 0;
                    border-radius: 5px;
                    color: white;
                    padding: var(--space);
                    text-transform: uppercase;
                }
            </style>
            <div class="btn-container">
                <button class="btn">Comprar ahora</button>
            </div>    
            `

    }
}


//definir que componente estamos utilizando
window.customElements.define('sell-button',SellButton)