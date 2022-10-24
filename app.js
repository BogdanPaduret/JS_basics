let container = document.querySelector(".container-masini");
let btnLoad = document.querySelector(".btn-load");
let btnAdd = document.querySelector(".btn-add");
let addBrand = document.querySelector("#brand");
let addModel = document.querySelector("#model");
let addPutere = document.querySelector("#putere");
let addLocuri = document.querySelector("#locuri");
let addPortiere = document.querySelector("#portiere");

let select = document.querySelector("#filter-brand");

let selectDefault = document.querySelector("#default-brand-filter");

let masina;

container.innerHTML = createRows(masini);

populateBrands(masini);

btnLoad.addEventListener("click", () => {
  reset();
  container.innerHTML = createRows(masini);
});

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

  reset();
  populateBrands;
  container.innerHTML = createRows(masini);
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

select.addEventListener("change", (e) => {
  console.log(select.value);
  container.innerHTML = createRows(filterBrand(masini, select.value));
});
