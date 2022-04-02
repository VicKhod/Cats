let container = document.querySelector(".container");
function setCard(info = {}) {
    let div = document.createElement("div");
    div.className = "cat";
    div.innerHTML = `
        <div class="img" style="background-image: url(${info.img_link || 'files/img/cat-fill.svg'})"></div>
        <div class="name">${info.name || "Vasya"}</div>
        <div class="rate">${info.rate || 0}</div>
    `;
    container.append(div);
}

let path = {
    getAll: "http://sb-cats.herokuapp.com/api/2/VicIllar/show",
    getOne: "http://sb-cats.herokuapp.com/api/2/VicIllar/show/",
    getId: "http://sb-cats.herokuapp.com/api/2/VicIllar/ids",
    add: "http://sb-cats.herokuapp.com/api/2/VicIllar/add",
    upd: "http://sb-cats.herokuapp.com/api/2/VicIllar/update/",
    del: "http://sb-cats.herokuapp.com/api/2/VicIllar/delete/"
}

fetch(path.getAll)
    .then(res => res.json())
    .then(result => {
        console.log(result);
        if (result.data) {
            result.data.forEach(cat => {
                setCard(cat);
            });
        }
});

function openWindow() {$(`.container cat`).on(`click`, click(function(e){
    e.preventDefault() 
    $(`.popup`).addClass(`active`);
    return false;
}))};