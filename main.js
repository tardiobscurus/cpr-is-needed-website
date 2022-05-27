var submit = document.getElementById("submit");
var maps = document.getElementById("maps");
var viewmap = document.getElementById("viewmap");

maps.value = "05_25_22";
viewmap.setAttribute("src", `./${maps.value}/unmined.index.html`);

submit.onclick = () => {
    viewmap.setAttribute("src", `./${maps.value}/unmined.index.html`);
}
