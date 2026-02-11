const d = document,
  $boton = d.querySelector("button"),
  $tarjetas = d.querySelectorAll(".tarjeta");

function hexAleatorio() {
  return (
    "#" +
    Math.floor(Math.random() * 16777216)
      .toString(16)
      .padStart(6, "0")
  );
}

$boton.addEventListener("click", () => {
  $tarjetas.forEach(($tarjeta) => {
    const $muestra = $tarjeta.querySelector(".muestra");
    const $codigo = $tarjeta.querySelector(".codigo");
    const hex = hexAleatorio();
    $muestra.style.backgroundColor = hex;
    $codigo.textContent = hex;
  });
});
