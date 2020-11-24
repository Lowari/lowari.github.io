let validation = document.getElementById('validPanier');
validation.addEventListener('click', function () {
    alert('Merci pour votre achat et à bientôt !');
});

let compteur = 0;
let arrayQuantity = [];
let individualTotal = [];

function addToCart(img, nom, prixUnitaire, quantite) {
    let newTr = document.createElement('tr');
    newTr.setAttribute ("id", "tableRow-" + compteur);
    newTr.innerHTML = `<td><img class="imgPanier" src="${img}"></td><td>${nom}</td><td class="prixUnitaire text-center" id="singlePrice-${compteur}">${prixUnitaire} €</td>
    <td><button type="button" onclick="minusQuantity(${compteur})"><i class="fas fa-minus"></i></button> <p class="quantityValue" id="numberProduct-${compteur}">${quantite}</p> 
    <button type="button" onclick="addQuantity(${compteur})"><i class="fas fa-plus"></i></button></td>
    <td id="total-${compteur}">${prixUnitaire}</td><td><button class="btn btn-danger selectDeleteButton"onclick="removeToCart('tableRow-${compteur}')">supprimer</button></td>`;
    tableCart.appendChild(newTr);
    arrayQuantity[compteur] = parseInt(document.getElementById("numberProduct-" + compteur).innerHTML);
    individualTotal[compteur] = parseInt(document.getElementById("total-" + compteur).innerHTML);
    compteur++;
    console.log(individualTotal);
}

document.getElementById("buttonTriggerCart").onclick = function () {
    let price = document.getElementsByClassName("prixUnitaire");
    let priceArray = [...price];
    
    let total = 0;

    priceArray.forEach(element => {
        let priceValue = parseFloat(element.innerHTML.split(" ")[0]);

        total += priceValue;
        document.getElementById("totalFooter").innerHTML = total + "€";
    });
};

function removeToCart (id) {
    document.getElementById(id).remove();
}


function addQuantity(compteurValue) {
    let quantity = parseInt(document.getElementById("numberProduct-" + compteurValue).innerHTML);
    quantity++;
    document.getElementById("numberProduct-" + compteurValue).innerHTML = quantity;
    arrayQuantity[compteurValue] = quantity;

    let singlePrice = parseFloat(document.getElementById("singlePrice-" + compteurValue).innerHTML.split(" ")[0]);
    let total = singlePrice * quantity;
    document.getElementById("total-" + compteurValue).innerHTML = total;

    individualTotal[compteurValue] = total;
    let totalGlobal = 0;
    individualTotal.forEach(element => {
        totalGlobal += element;
    });
    document.getElementById("totalFooter").innerHTML = totalGlobal + "€";
}


function minusQuantity(compteurValue) {
    let quantity = parseInt(document.getElementById("numberProduct-" + compteurValue).innerHTML);
    quantity--;
    document.getElementById("numberProduct-" + compteurValue).innerHTML = quantity;
    arrayQuantity[compteurValue] = quantity;

    let singlePrice = parseFloat(document.getElementById("singlePrice-" + compteurValue).innerHTML.split(" ")[0]);
    let total = singlePrice * quantity;
    document.getElementById("total-" + compteurValue).innerHTML = total;

    individualTotal[compteurValue] = total;
    let totalGlobal = 0;
    individualTotal.forEach(element => {
        totalGlobal += element;
    });
    document.getElementById("totalFooter").innerHTML = totalGlobal + "€";
}

let linkNav = document.querySelectorAll('nav a');

linkNav.forEach(element => {
        element.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    