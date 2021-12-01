const site = document.getElementById("site")
const url = "https://pixabay.com/api/?key=24593919-f35a3cff4500072220f9897e2&q=Architecture&image_type=photo"


//  data API
function getImageFromPixabay() {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            const images = data.hits;
            console.log(data);
            showListCardImages(images);
        })
        .catch((err) => console.log(err));
}
// ======================================================================


function maListDeCards(arrayImg) {

    const container = document.createAttribute("div");
    container.setAttribute("class", "container")

    const row = document.createAttribute("div");
    row.setAttribute("class", "row")
    row.setAttribute("id", "listCard")

    site.appendChild(container)
    container.appendChild(row)



    for (let i = 0; i < arrayImg.length; i++) {

        const card = document.createAttribute("div");
        card.setAttribute("class", "card col-md-4")

        const img = document.createElement("img");
        img.setAttribute("class", "card-img-top")


        const cardBody = document.createAttribute("div");
        cardBody.setAttribute("class", "card-body")

        const title = document.createElement("h5");
        title.setAttribute("class", "card-title")

        const texte = document.createElement("p");
        texte.setAttribute("class", "card-text")






    }


}