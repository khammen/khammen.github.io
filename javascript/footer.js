class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      //Could move the style stuff to a CSS file
      this.innerHTML = `
      <footer>
        <div class="lcolumn">
            <div>Stay up to date with what I'm doing!
                <a href="https://github.com/khammen/">
                    <img class="logo" src="/Images/GitHub-logo.png" alt="GitHub-logo">
                </a>
            </div>
        </div>
        <div class="column">
            <div>Or send me an email with any questions:</div>
            <a href="khammenscout@gmail.com">khammenscout@gmail.com</a>
        </div>
        <div class="rcolumn">Last updated: 10/26/2023</div>
    </footer>`;
    }
  }
  
  customElements.define('footer-component', Footer);