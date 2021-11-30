const site = document.getElementsByClassName("site")
const ArrayImg ="https://pixabay.com/api/?key=24593919-f35a3cff4500072220f9897e2&q=yellow+flowers&image_type=photo"


maListDeCards()

function maListDeCards(ArrayImg) {

    const container = document.createAttribute("div");
    container.setAttribute("class","container")

    const row = document.createAttribute("div");
    row.setAttribute("class", "row")

    site.appendChild(container)
    container.appendChild(row)

    //for (let i = 0; i < .length; i++)

    const card = document.createAttribute("div");
    card.setAttribute("class", "card col-md-4")
    
    const img = document.createElement("img");
    img.setAttribute("class","card-img-top")
    img.URL("creative1.jpg")

    const cardBody = document.createAttribute("div");
    cardBody.setAttribute("class","card-body")

    const title = document.createElement("h5");
    title.setAttribute("class","card-title")
    title.textContent("Mon titre")

    const texte = document.createElement("p");
    texte.setAttribute("class","card-text")
    texte.textContent("Lorem")

    






}