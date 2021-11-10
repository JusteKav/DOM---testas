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
      this.htmlElement.innerHTML = "siunčiama...";
    } else {
      this.htmlElement.innerHTML = "parsiųsta!";
    }
  };
}
