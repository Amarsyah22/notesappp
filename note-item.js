class NoteItem extends HTMLElement {
  constructor() {
    super();
    this.title = this.getAttribute('title');
    this.body = this.getAttribute('body');

    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        .note-item {
          background-color: #f9f9f9;
          border-radius: 8px;
          padding: 16px;
          margin-bottom: 16px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .note-item h2 {
          margin-top: 0;
          margin-bottom: 8px;
        }
        .note-item p {
          margin-top: 0;
        }
      </style>
      <div class="note-item">
        <h2>${this.title}</h2>
        <p>${this.body}</p>
      </div>
    `;
    this.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('note-item', NoteItem);
