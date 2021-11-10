class ApartmentGridComponent {
  constructor() {
    this.state = {
      apartments: [],
    };
    this.htmlElement = document.createElement("div");
    this.init();
  }
  init = () => {
    this.htmlElement.innerHTML = "minimalus turinys";
  };
}
