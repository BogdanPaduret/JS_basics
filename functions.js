//functie ce primeste ca parametru un vector de masini si afiseaza masinile

function showBrand(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].brand);
  }
}

//functie ce primeste ca parametru un obiect si returneaza un string

function createRow(car) {
  return `
    <tr>
        <td class="brand">${car.brand}</td>
        <td class="model">${car.model}</td>
        <td>${car.putere}</td>
        <td>${car.locuri}</td>
        <td>${car.portiere}</td>
        <td>
          <button class="btn-del_${car.brand}_${car.model}">Delete me!</button>
        </td>
    </tr>
    `;
}

function createRows(arr) {
  let string = "";
  for (let i = 0; i < arr.length; i++) {
    string += createRow(arr[i]);
  }
  return string;
  //   console.log(string);
}

function reset() {
  let brand = document.querySelector("#brand");
  let model = document.querySelector("#model");
  let putere = document.querySelector("#putere");
  let locuri = document.querySelector("#locuri");
  let portiere = document.querySelector("#portiere");

  brand.value = "";
  model.value = "";
  putere.value = "";
  locuri.value = "";
  portiere.value = "";

  btnAdd.textContent = "Add";
}

function deleteCar(arr, delBrand, delModel) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].model != delModel || arr[i].brand != delBrand) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

function getCar(arr, modelName) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].model == modelName) {
      return arr[i];
    }
  }
}

function update(arr, masina, inlocuitor) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == masina) {
      arr[i] = inlocuitor;
    }
  }
  return arr;
}
