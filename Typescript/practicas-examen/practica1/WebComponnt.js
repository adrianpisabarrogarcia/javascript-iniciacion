customElements.define('mi-parrafo',
class WebComponent extends HTMLElement {
    constructor() {
        super();
        let template = document.getElementById('mi-parrafo ');
        let templateContent = 'hola';
        const shadowRoot = this.attachShadow({mode: 'open'})
        appendChild(templateContent.cloneNode(true));
    }
})
