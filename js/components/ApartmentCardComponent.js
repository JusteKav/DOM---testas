class ApartmentCardComponent {
  constructor(props) {
    this.props = props;
    this.htmlElement = document.createElement("article");
    this.init();
  }

  init = () => {
    this.htmlElement.className = "col-12 col-sm-6 col-lg-4 col-xl-3 position-relative";
    this.htmlElement.innerHTML = `
    <div class="card p-3 shadow-sm">
    <p>turinys</p>
    </div>
    `;
  };
}
