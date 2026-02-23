const d = document,
  $boton = d.querySelector("button"),
  $cantidad = d.querySelector("#cantidad"),
  $paleta = d.querySelector(".paletaColores");

function hexAleatorio() {
  return (
    "#" +
    Math.floor(Math.random() * 16777216)
      .toString(16)
      .padStart(6, "0")
  );
}

function eliminarPaleta() {
  $paleta.innerHTML = "";
}

function crearPaletas() {
  eliminarPaleta();
  let $fragment = d.createDocumentFragment();
  for (let i = 0; i < $cantidad.value; i++) {
    const $tarjeta = d.createElement("article");
    $tarjeta.classList.add("tarjeta");
    $tarjeta.innerHTML = `
  <div class="muestra"></div>
  <p class="codigo"></p>
`;
    $fragment.appendChild($tarjeta);
  }

  $paleta.appendChild($fragment);
  console.log($paleta);
}

$boton.addEventListener("click", () => {
  crearPaletas();
  const $tarjetas = d.querySelectorAll(".tarjeta");
  $tarjetas.forEach(($tarjeta) => {
    const $muestra = $tarjeta.querySelector(".muestra");
    const $codigo = $tarjeta.querySelector(".codigo");
    const hex = hexAleatorio();
    $muestra.style.backgroundColor = hex;
    $codigo.textContent = hex;
  });
});

$cantidad.addEventListener("change", () => {
  crearPaletas();
});
