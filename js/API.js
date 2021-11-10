const urlBase = "http://localhost:3000";

class API {
  static getApartments = (resolve, reject) => {
    setTimeout(() => {
      fetch(urlBase + "/Apartments")
        .then((data) => data.json())
        .then(resolve)
        .catch(reject);
    }, 1000);
  };

  static deleteApartments = (id, resolve, reject) => {
    fetch(urlBase + "/Apartments/" + id, { method: "DELETE" })
      .then((data) => data.json())
      .then(resolve)
      .catch(reject);
  };
}

API.getApartments(
  (duomenys) => console.log("Gauti duomenys: ", duomenys),
  (klaida) => console.error("Kode yra klaida: ", klaida)
);

// API.deleteApartments(
//   "2",
//   (duomenys) => console.log("Gauti duomenys: ", duomenys),
//   (klaida) => console.error("Kode yra klaida: ", klaida)
// );
