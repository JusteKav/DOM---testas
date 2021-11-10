class ApartmentCardComponent {
  constructor(props) {
    this.props = props;
    this.htmlElement = document.createElement("article");
    this.init();
  }

  static USD_EUR = 0.86;
  checkCurrency = (amount, currency) => {
    if (currency === "€") {
      return amount;
    } else {
      return Math.round(amount * ApartmentCardComponent.USD_EUR);
    }
  };

  init = () => {
    const { id, type, owner, roomCount, squares, address, price, imgSrc, deleteCard } = this.props;
    const { fullname, email, phone } = owner;
    const { city, country, street, number } = address;
    const { amount, currency } = price;

    const fullAddress = `${street} - ${number}, ${city}, ${country}`;

    this.htmlElement.className = "col-12 col-sm-6 col-lg-4 col-xl-3 position-relative";
    this.htmlElement.innerHTML = `
    <div class="card p-3 shadow-sm">
    <img src="${imgSrc}" height="200px">
    <h3 class="mt-2 h5 text-muted">Apartment details</h3>
    <ul>
        <li><strong>Address:</strong> ${fullAddress}</li>
        <li><strong>Price:</strong> ${this.checkCurrency(amount, currency)} €</li>
        <li><strong>Type:</strong> ${type}</li>
        <li><strong>Squares:</strong> ${squares} m2</li>
        <li><strong>Room count:</strong> ${roomCount}</li>
    </ul>
    <h3 class="h5 text-muted">Owner</h3>
    <ul>
        <li><strong>Fullname:</strong> ${fullname}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Number:</strong> ${phone}</li>
    </ul>
    <button class="btn btn-danger btn-sm position-absolute top-0 end-0 mt-3 me-3">✕</button>
    </div>
    `;
    const btn = this.htmlElement.querySelector(".btn");
    btn.addEventListener("click", deleteCard);
  };
}
