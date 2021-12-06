console.log("coucou");

const site = document.getElementById("site");

const state = {
    listCard: [],
};
const mutation = {
    setListCard(state, value) {
        console.log("mutation", state, value);
        state.listCard = value;

    },
};

const actions = {

    //  On va chercher l'API
    getImagePixabay(event) {

        // la condition en-dessous permet d'accepter la recherche que si on appuie sur "entrée"
        const input = document.getElementById("inputSearch");
        console.log("input", input.value);
        let url =
            "https://pixabay.com/api/?key=24593919-f35a3cff4500072220f9897e2&q=sun&image_type=photo&pretty=true";

        // si le input contient du text alors on change l'url
        if (input.value.length > 0) {
            url = `https://pixabay.com/api/?key=24593919-f35a3cff4500072220f9897e2&q=${input.value}`;
        }

        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                console.log("res :", res);

                mutation.setListCard(state, res.hits)

                console.log("res2: ", state);

                maListDeCards(state.listCard);
            })

            .catch((err) => console.log(err));
    },
};
// ======================================================================

function makeInput() {

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
    input.setAttribute("onkeypress", "actions.getImagePixabay(event)");
    input.setAttribute("id", "inputSearch");

    // On rattache notre container au site et l'input à notre container
    site.appendChild(container);
    container.appendChild(divInput);
    divInput.appendChild(spanInput);
    divInput.appendChild(input);
}


function maListDeCards(arrayImg) {
    console.log("maListDeCards", arrayImg);

    const list = document.getElementById("listCard");
    if (list) list.parentNode.removeChild(list);
    // On crée le container
    const container = document.createElement("div");
    container.setAttribute("class", "container");

    // On crée le row 
    const row = document.createElement("div");
    row.setAttribute("class", "row")
    row.setAttribute("id", "listCard")

    site.appendChild(container);
    container.appendChild(row);


    // On crée notre boucle 
    for (let i = 0; i < arrayImg.length; i++) {
        const colmd4 = document.createElement("div")
        colmd4.setAttribute("class","col-md-4")

        // On construit nos cards + données API
        const card = document.createElement("div");
        card.setAttribute("class", "card")
        card.setAttribute("style","width:18rem")

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

    }
}

function mounted() {
    console.log("Mounted : ");
    makeInput()

}
mounted()
console.log("fin", state);