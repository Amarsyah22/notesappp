class AppBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                /* Styling untuk app-bar */
                .app-bar {
                    background-color: var(--primary-color);
                    color: white;
                    padding: 10px;
                    text-align: center;
                }
            </style>
            <div class="app-bar">
                <h2>Notes App</h2>
            </div>
        `;
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('app-bar', AppBar);
