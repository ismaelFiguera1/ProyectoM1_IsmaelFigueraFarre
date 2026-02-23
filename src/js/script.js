const d = document,
  $boton = d.querySelector("button"),
  $cantidad = d.querySelector("#cantidad"),
  $paleta = d.querySelector(".paletaColores"),
  $formato = d.getElementById("formato");

function ColorearTarjeta(formato) {
  if (formato === "hex") {
    const hex = hexAleatorio();
    return hex;
  } else if (formato === "hsl") {
    const hsl = hslAleatorio();
    return hsl;
  }
}

function hexAleatorio() {
  const codigo = Math.floor(Math.random() * 16777216)
  .toString(16)
  .padStart(6, "0");
  return `#${codigo}`;
}

function hslAleatorio() {
  const h = Math.floor(Math.random() * 360);   // 0 a 359
  const s = Math.floor(Math.random() * 101);   // 0 a 100
  const l = Math.floor(Math.random() * 101);   // 0 a 100
  return `hsl(${h}, ${s}%, ${l}%)`;
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
}

$boton.addEventListener("click", () => {
  crearPaletas();
  const $tarjetas = d.querySelectorAll(".tarjeta");
  $tarjetas.forEach(($tarjeta) => {
    const $muestra = $tarjeta.querySelector(".muestra");
    const $codigo = $tarjeta.querySelector(".codigo");
    const color = ColorearTarjeta($formato.value);
     $muestra.style.backgroundColor = color;
    $codigo.textContent = color;
  });
});

$cantidad.addEventListener("change", () => {
  eliminarPaleta();
});

$formato.addEventListener("change", () => {
  eliminarPaleta();
});
