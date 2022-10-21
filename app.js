let container = document.querySelector(".container-masini");
let btnLoad = document.querySelector(".btn-load");
let btnAdd = document.querySelector(".btn-add");
container.innerHTML = createRows(masini);
// btnLoad.addEventListener("click", () => {
//
// });

let addBrand = document.querySelector("#brand");
let addModel = document.querySelector("#model");
let addPutere = document.querySelector("#putere");
let addLocuri = document.querySelector("#locuri");
let addPortiere = document.querySelector("#portiere");

let masina;

btnAdd.addEventListener("click", () => {
  let newMasina = {
    brand: addBrand.value,
    model: addModel.value,
    putere: addPutere.value,
    locuri: addLocuri.value,
    portiere: addPortiere.value,
  };

  if (btnAdd.textContent == "Add") {
    masini.push(newMasina);
  } else if (btnAdd.textContent == "Update") {
    btnAdd.textContent = "Add";
    masini = update(masini, masina, newMasina);
  }

  container.innerHTML = createRows(masini);
  reset();
});

container.addEventListener("click", (e) => {
  let ob = e.target;

  if (ob.tagName == "BUTTON") {
    // console.log(ob.className.split("-"));
    let arr = ob.className.split("_");
    console.log(arr[1], arr[2]);
    masini = deleteCar(masini, arr[1], arr[2]);
    container.innerHTML = createRows(masini);
  } else if (ob.tagName == "TD") {
    // console.log(ob.parentNode.querySelector(".model").textContent);
    masina = getCar(masini, ob.parentNode.querySelector(".model").textContent);
    addBrand.value = masina.brand;
    addModel.value = masina.model;
    addPutere.value = masina.putere;
    addLocuri.value = masina.locuri;
    addPortiere.value = masina.portiere;
    btnAdd.textContent = "Update";
  }
});
