//cambio de tema
function temaDia() {
  document.querySelector("nav").classList.remove("navbar-dark", "bg-dark");
  document.querySelector("nav").classList.add("navbar-light", "bg-light");
  //console.log("dia");
  document
    .querySelectorAll("main")
    .forEach((main) => main.classList.remove("bg-dark", "text-white"));
  document.querySelector("header").classList.add("bg-light");
  document.querySelector("header").classList.remove("bg-dark");
  localStorage.setItem("tema", "dia");
}
/* ------------------------------------------------------------ */
function temaNoche() {
  document.querySelector("nav").classList.add("navbar-dark", "bg-dark");
  document.querySelector("nav").classList.remove("navbar-light", "bg-light");
  //console.log("noche");
  document
    .querySelectorAll("main")
    .forEach((main) => main.classList.add("bg-dark", "text-white"));
  document.querySelector("header").classList.remove("bg-light");
  document.querySelector("header").classList.add("bg-dark");
  localStorage.setItem("tema", "noche");
}

let infoTema = localStorage.getItem("tema");

if (infoTema == "dia") {
  temaDia();
} else {
  temaNoche();
}
