window.onscroll = () => {
  if (document.documentElement.scrollTop > 80) {
    document.querySelector(".contenedor").classList.add("mostrar");
  } else {
    document.querySelector(".contenedor").classList.remove("mostrar");
  }
};

function ocultarNavbar() {
  document.querySelector(".ocultarNb").classList.remove("show");
  //console.log("ocultar");
}
