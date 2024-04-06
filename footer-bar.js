class FooterBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                /* Styling untuk footer-bar */
                .footer-bar {
                    background-color: var(--primary-color);
                    color: white;
                    text-align: center;
                    padding: 10px;
                }
            </style>
            <div class="footer-bar">
                <p>Amarsyah Susanto Putra 2024 Notes App. All rights reserved.</p>
            </div>
        `;
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('footer-bar', FooterBar);
