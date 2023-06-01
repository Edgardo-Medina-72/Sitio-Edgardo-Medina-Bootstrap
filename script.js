window.onscroll = () => {
  if (document.documentElement.scrollTop > 80) {
    document.querySelector(".contenedor").classList.add("mostrar");
  } else {
    document.querySelector(".contenedor").classList.remove("mostrar");
  }
};

const $form = document.querySelector("#form");

$form.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  const form = new FormData(this);
  console.log(form.get("nombre"));
  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
      Accept: "application/json",
    },
  });
  if (response.ok) {
    this.reset();
    alert("Gracias");
  }
}
