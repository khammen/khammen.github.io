class Navbar extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      //Could move the style stuff to a CSS file
      this.innerHTML = `
      <nav class = "navbar">
      <div class="lcolumn">
          <a class = button href="index.html">My Work</a>
          <a class = button href="aboutMe.html">About Me</a>
          <a class = button href="contact.html">Contact Me!</a>
      </div>
      <div class="rcolumn">
          <div class="dropdown">
              <div id="dropdownButton" class="button">Course Links</div>
              <div id="dropdownContent" class="dropdown-content">
                  <a href="https://kroth353.github.io/">Previous Student</a>
                  <a href="https://mattm401.github.io/">Course Page</a>
                  <a href="https://faithlovell.github.io/">Next Student</a>
              </div>
          </div>              
      </div>
  </nav>`;
    }
  }
  
  customElements.define('nav-component', Navbar);