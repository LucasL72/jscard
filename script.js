console.log("Coucou");

// On déclare la const de la page 
const site = document.getElementById("site")
const url ="https://pixabay.com/api/?key=24593919-f35a3cff4500072220f9897e2&q=sun&image_type=photo"

//  On va chercher l'API
function getImagePixabay() {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            const images = data.hits;
            console.log(data);
            maListDeCards(images);
        })
        .catch((err) => console.log(err));
}
// ======================================================================


function maListDeCards(arrayImg) {

    // On crée le container
    const container = document.createElement("div");
    container.setAttribute("class", "container");

    // On crée le row 
    const row = document.createElement("div");
    row.setAttribute("class", "row")
    row.setAttribute("id", "listCard")

    // On crée l'Input ( div + span)
    const divInput = document.createElement("div");
    divInput.setAttribute("class", "input-group flex-nowrap py-2");

    const spanInput = document.createElement("span");
    spanInput.setAttribute("class", "input-group-text");
    spanInput.innerText = "Recherche";

    const input = document.createElement("input");
    input.setAttribute("class", "form-control");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Votre recherche");
    input.setAttribute("aria-label", "Votre recherche");
    input.setAttribute("aria-describedby", "addon-wrapping");
    input.setAttribute("onkeyup", "monFiltre()");
    input.setAttribute("id", "inputFilter");

    // On rattache notre container au site et l'input à notre container
    site.appendChild(container);
    container.appendChild(divInput);
    divInput.appendChild(spanInput);
    divInput.appendChild(input);
    container.appendChild(row);


    // On crée notre boucle 
    for (let i = 0; i < arrayImg.length; i++) {

        const colmd4 = document.createElement("div");
        colmd4.setAttribute("class","col-md-4");

        // On construit nos cards + données API
        const card = document.createElement("div");
        card.setAttribute("class", "card")

        const img = document.createElement("img");
        img.setAttribute("class", "card-img-top")
        img.setAttribute("src", arrayImg[i].previewURL);

        const cardBody = document.createElement("div");
        cardBody.setAttribute("class", "card-body")

        const title = document.createElement("h5");
        title.setAttribute("class", "card-title")
        title.innerText = "type: " + arrayImg[i].type;

        const text = document.createElement("p");
        text.setAttribute("class", "card-text")
        text.innerText = "like: " + arrayImg[i].likes;

        const tags = document.createElement("p");
        tags.setAttribute("class", "card-text");
        tags.innerText = "tags: " + arrayImg[i].tags;

        const link = document.createElement("a");
        link.setAttribute("class", "card-text btn btn-primary");
        link.setAttribute("href", arrayImg[i].pageURL);
        link.setAttribute("target", "_blank");
        link.innerText = "Voir Photos";

        /*const btn = document.createElement("p");
        btn.setAttribute("class", "btn btn-primary");
        btn.innerText = "Voir Photos";*/

        // ON rattache card à notre row
        row.appendChild(colmd4);
        colmd4.appendChild(card);
        // On rattache img et le cardBody à notre card
        card.appendChild(img);
        card.appendChild(cardBody);
        // on constitue notre body
        cardBody.appendChild(title);
        cardBody.appendChild(text);
        cardBody.appendChild(tags);
        cardBody.appendChild(link);
        
        // on assemble le bouton au lien
        //link.appendChild(btn);
    }

}
// ======== La fonction filtre
function monFiltre() {
    // Declare variables
    let input, filter, listCard, card, h5, tags, i, txtValue;
    input = document.getElementById("inputFilter");
    filter = input.value.toUpperCase();
    listCard = document.getElementById("listCard");
    card = listCard.getElementsByTagName("div");

    // Boucle pour parcourir nos cards
    for (i = 0; i < card.length; i++) {
        h5 = card[i].getElementsByTagName("h5")[0];
        tags = card[i].getElementsByTagName("p")[1];

        txtValueH5 =
            (h5.textContent || h5.textContent).toUpperCase().indexOf(filter) > -1;
        txtValueTags =
            (tags.textContent || tags.textContent).toUpperCase().indexOf(filter) > -1;

        // Condition pour ajouter notre display none au div ne correspondant pas à notre recherche (input.value)
        if (txtValueH5 || txtValueTags) {
            card[i].style.display = "";
        } else {
            card[i].style.display = "none";
        }
    }
}


getImagePixabay();