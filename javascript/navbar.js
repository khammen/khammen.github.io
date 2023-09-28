class Navbar extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      //Could move the style stuff to a CSS file
      this.innerHTML = `
  <nav class = "navbar">
      <div class="lcolumn">
          <a class = button href="https://kroth353.github.io/">Previous Student</a>
      </div>
      <div class="column">
          <a class = button href="https://mattm401.github.io/">Course Page</a>
          <a class = button href="index.html">Home</a>
          <a class = button href="aboutMe.html">About Me!</a>
          <a class = button href="contact.html">Contact Form</a>
      </div>
      <div class="rcolumn">
          <a class = button href="https://faithlovell.github.io/">Next Student</a>
      </div>
  </nav>`;
    }
  }
  
  customElements.define('nav-component', Navbar);