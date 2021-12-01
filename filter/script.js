
// Filtre ===OK===== 
function monFiltre() {
    // On déclare les variables
    let input, filter, ul, li, h4, i, txtvalue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = document.getElementsByTagName("li");

    /* boucle pour afficher les cards ,
                    ou non si le recherche
         ne correspond pas au mot clé*/

    for (i = 0; i < li.length; i++) {
        h4 = li[i].getElementsByTagName("h4")[0];
        txtvalue = h4.textcontent || h4.innerText;
        if (txtvalue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }

    }
}