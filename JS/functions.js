const cars = [
    {
        trademark: "Volkswagen",
        model: "Jetta",
        color: "Negro",
        year: "2021",
        price: "$ 459,990",
        image: "https://vw-eca.com.mx/Assets/ModelosNuevos/img/Modelos/JETTA/20/Colores/negro.png"
    },
    {
        trademark: "Chevrolet",
        model: "Silverado",
        color: "Gris",
        year: "2021",
        price: "$ 641,000",
        image: "https://www.chevrolet.com.mx/content/dam/chevrolet/na/mx/es/index/pickups-and-trucks/2021-silverado/colorizer/01-images/gris-grafito-metalico.jpg?imwidth=960"
    },
    {
        trademark: "Ford",
        model: "Escape",
        color: "Azúl",
        year: "2020",
        price: "$ 708,800",
        image: "https://img1.static.reweb.io/tiny/0/0/dealers.rewebmkt.com/images/20191129071800-azul-electrico.png"
    },
    {
        trademark: "Renault",
        model: "Kwid",
        color: "Blanco",
        year: "2021",
        price: "$ 187,100",
        image: "https://www.elcarrocolombiano.com/wp-content/uploads/2020/11/20201104-RENAULT-KWID-ICONIC-COLOMBIA-PRECIO-CARACTERISTICAS-02-750x518.jpg"
    },
   
];
const container = document.getElementById("cars-container");
printCars(cars);
function printCars(cars) {
    const models = document.getElementById("model-form");
    container.innerHTML = "";
    cars.forEach((car) => {
        const htmlCar = `<div class="card" style="width: 18rem;">
                            <img src="${car.image}" class="card-img-top" alt="Vento">
                            <div class="card-body">
                                <h1>${car.trademark}</h1>
                                <p class="card-text">${car.model}</p>
                                <p class="card-text">${car.color}</p>
                                <p class="card-text">${car.year}</p>
                                <p class="card-text">${car.price}</p>
                                <button type="button" class="btn btn-success">Editar</button>
                                <button type="button" class="btn btn-danger">Eliminar</button>
                            </div>
                        </div>`
        container.innerHTML += htmlCar;
    })
}

function addModel() {
    const inputTrademark = document.getElementById("trademark").value;
    const inputModel = document.getElementById("model").value;
    const inputColor = document.getElementById("color").value;
    const inputYear = document.getElementById("year").value;
    const inputPrice = document.getElementById("price").value;
    const inputImage = document.getElementById("image").value

    const newCar = {
        trademark: inputTrademark,
        model: inputModel,
        color: inputColor,
        year: inputYear,
        price: inputPrice,
        image: inputImage
    }
    
    cars.push(newCar);
    printCars(cars);
}

function showFormContainer() {
    document.getElementById('create-user-container').classList.remove('d-none');
}

// function deleteCar(index) {
//     cars.splice(index, 1)
//     printCars();
// }






