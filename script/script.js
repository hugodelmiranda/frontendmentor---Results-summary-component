let axes = document.querySelector("ul");
let soma;
fetch("../data.json").then((response) => {
  response.json().then((categories) => {
    categories.map((categorie) => {
      axes.innerHTML += `<li><div class="axesIcon"><img src="${categorie.icon}" alt="icon"></div><h1>${categorie.category}</h1><div class="axesvalue"><span>${categorie.score}</span>/ 100</div></li>`;
    });
  });
});
