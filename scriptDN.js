//cambio de tema
function temaDia() {
  document.querySelector("nav").classList.remove("navbar-dark", "bg-dark");
  document.querySelector("nav").classList.add("navbar-light", "bg-light");
  console.log("dia");
  document
    .querySelectorAll("main")
    .forEach((main) => main.classList.remove("bg-dark", "text-white"));
  /* document
    .querySelectorAll("#relleno")
    .forEach((rlln) => rlln.classList.add("rellenoDia")); */
  /* document
    .querySelectorAll(".botonMenu")
    .forEach((btn) => btn.classList.add("botonMenuDia")); */
  /* document
    .querySelectorAll(".tarjetaM")
    .forEach((card) => card.classList.add("tarjetaMDia")); */
  localStorage.setItem("tema", "dia");
}
/* ------------------------------------------------------------ */
function temaNoche() {
  document.querySelector("nav").classList.add("navbar-dark", "bg-dark");
  document.querySelector("nav").classList.remove("navbar-light", "bg-light");
  console.log("noche");
  document
    .querySelectorAll("main")
    .forEach((main) => main.classList.add("bg-dark", "text-white"));
  /* document
    .querySelectorAll("#relleno")
    .forEach((rlln) => rlln.classList.remove("rellenoDia")); */
  /* document
    .querySelectorAll(".botonMenu")
    .forEach((btn) => btn.classList.remove("botonMenuDia")); */
  /* document
    .querySelectorAll(".tarjetaM")
    .forEach((card) => card.classList.remove("tarjetaMDia")); */
  localStorage.setItem("tema", "noche");
}

let infoTema = localStorage.getItem("tema");

if (infoTema == "dia") {
  temaDia();
} else {
  temaNoche();
}
