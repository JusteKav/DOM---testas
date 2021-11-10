class ApartmentGridComponent {
  constructor() {
    this.state = {
      apartments: [],
      loading: true,
    };
    this.htmlElement = document.createElement("div");
    this.init();
  }

  getApartment = () => {
    API.getApartments(this.saveApartments, this.showError);
  };

  saveApartments = (apartments) => {
    this.state.loading = false;
    this.state.apartments = apartments;
    this.render();
  };

  showError = (error) => {
    this.state.loading = false;
    console.error(error);
  };

  init = () => {
    this.getApartment(), this.render();
  };

  render = () => {
    if (this.state.loading) {
      this.htmlElement.className = "positive-relative";
      this.htmlElement.innerHTML =
        '<img src="assets/loading.gif" class="position-absolute top-50 start-50 translate-middle">';
    } else {
      this.htmlElement.innerHTML = "";
      this.htmlElement.className = "row g-3 justify-content-center";
      const cardComponents = this.state.apartments.map(
        ({ id, ...props }) =>
          new ApartmentCardComponent({
            ...props,
          })
      );
      const cardElements = cardComponents.map((componenent) => componenent.htmlElement);
      this.htmlElement.append(...cardElements);
    }
  };
}
